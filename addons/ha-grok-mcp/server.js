import express from "express";
import fs from "fs";
import crypto from "crypto";
import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";

const options = JSON.parse(fs.readFileSync("/data/options.json", "utf8"));

const HA_URL = options.ha_url || "http://supervisor/core";
const HA_TOKEN = options.ha_token;
const MCP_AUTH_TOKEN = options.mcp_auth_token;
const OAUTH_CLIENT_ID = options.oauth_client_id || "grok";
const OAUTH_CLIENT_SECRET = options.oauth_client_secret;

const PORT = 3000;

if (!HA_TOKEN || !MCP_AUTH_TOKEN || !OAUTH_CLIENT_SECRET) {
  throw new Error("Missing ha_token, mcp_auth_token, or oauth_client_secret in add-on configuration");
}

const authCodes = new Map();
const accessTokens = new Map();

function nowSeconds() {
  return Math.floor(Date.now() / 1000);
}

function makeToken() {
  return crypto.randomBytes(32).toString("hex");
}

function readBasicAuth(req) {
  const auth = req.headers.authorization || "";

  if (!auth.startsWith("Basic ")) {
    return null;
  }

  const decoded = Buffer.from(auth.slice(6), "base64").toString("utf8");
  const splitAt = decoded.indexOf(":");

  if (splitAt === -1) {
    return null;
  }

  return {
    client_id: decoded.slice(0, splitAt),
    client_secret: decoded.slice(splitAt + 1)
  };
}

function validateBearer(req) {
  const auth = req.headers.authorization || "";

  if (!auth.startsWith("Bearer ")) {
    return false;
  }

  const token = auth.slice("Bearer ".length);

  if (token === MCP_AUTH_TOKEN) {
    return true;
  }

  const tokenInfo = accessTokens.get(token);

  if (!tokenInfo) {
    return false;
  }

  if (tokenInfo.expires_at < nowSeconds()) {
    accessTokens.delete(token);
    return false;
  }

  return true;
}

async function haGet(path) {
  const res = await fetch(`${HA_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${HA_TOKEN}`,
      "Content-Type": "application/json"
    }
  });

  if (!res.ok) {
    throw new Error(`Home Assistant error ${res.status}: ${await res.text()}`);
  }

  return res.json();
}

async function haPost(path, body) {
  const res = await fetch(`${HA_URL}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HA_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) {
    throw new Error(`Home Assistant error ${res.status}: ${await res.text()}`);
  }

  return res.json();
}

const mcpServer = new McpServer({
  name: "home-assistant-grok-mcp",
  version: "0.2.0"
});

mcpServer.tool(
  "get_entity_state",
  "Get the current state of a Home Assistant entity.",
  {
    entity_id: z.string()
  },
  async ({ entity_id }) => {
    const data = await haGet(`/api/states/${entity_id}`);

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

mcpServer.tool(
  "list_states",
  "List Home Assistant entity states.",
  {},
  async () => {
    const data = await haGet("/api/states");

    const trimmed = data.map((item) => ({
      entity_id: item.entity_id,
      state: item.state,
      friendly_name: item.attributes?.friendly_name
    }));

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(trimmed, null, 2)
        }
      ]
    };
  }
);

mcpServer.tool(
  "turn_light_on",
  "Turn on a Home Assistant light entity only.",
  {
    entity_id: z.string()
  },
  async ({ entity_id }) => {
    if (!entity_id.startsWith("light.")) {
      throw new Error("Only light entities are allowed.");
    }

    const data = await haPost("/api/services/light/turn_on", {
      entity_id
    });

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

mcpServer.tool(
  "turn_light_off",
  "Turn off a Home Assistant light entity only.",
  {
    entity_id: z.string()
  },
  async ({ entity_id }) => {
    if (!entity_id.startsWith("light.")) {
      throw new Error("Only light entities are allowed.");
    }

    const data = await haPost("/api/services/light/turn_off", {
      entity_id
    });

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify(data, null, 2)
        }
      ]
    };
  }
);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    name: "home-assistant-grok-mcp",
    version: "0.2.0"
  });
});

app.get("/authorize", (req, res) => {
  const responseType = req.query.response_type;
  const clientId = req.query.client_id;
  const redirectUri = req.query.redirect_uri;
  const state = req.query.state;
  const scope = req.query.scope || "mcp";

  if (responseType !== "code") {
    return res.status(400).send("Unsupported response_type");
  }

  if (clientId !== OAUTH_CLIENT_ID) {
    return res.status(400).send("Invalid client_id");
  }

  if (!redirectUri || typeof redirectUri !== "string") {
    return res.status(400).send("Missing redirect_uri");
  }

  const code = makeToken();

  authCodes.set(code, {
    client_id: clientId,
    redirect_uri: redirectUri,
    scope,
    expires_at: nowSeconds() + 300
  });

  const redirect = new URL(redirectUri);
  redirect.searchParams.set("code", code);

  if (state) {
    redirect.searchParams.set("state", state);
  }

  return res.redirect(302, redirect.toString());
});

app.post("/token", (req, res) => {
  const basic = readBasicAuth(req);

  const grantType = req.body.grant_type;
  const code = req.body.code;
  const redirectUri = req.body.redirect_uri;

  const clientId = basic?.client_id || req.body.client_id;
  const clientSecret = basic?.client_secret || req.body.client_secret;

  if (grantType !== "authorization_code") {
    return res.status(400).json({
      error: "unsupported_grant_type"
    });
  }

  if (clientId !== OAUTH_CLIENT_ID || clientSecret !== OAUTH_CLIENT_SECRET) {
    return res.status(401).json({
      error: "invalid_client"
    });
  }

  const codeInfo = authCodes.get(code);

  if (!codeInfo) {
    return res.status(400).json({
      error: "invalid_grant"
    });
  }

  if (codeInfo.expires_at < nowSeconds()) {
    authCodes.delete(code);
    return res.status(400).json({
      error: "invalid_grant"
    });
  }

  if (codeInfo.client_id !== clientId) {
    return res.status(400).json({
      error: "invalid_grant"
    });
  }

  if (redirectUri && redirectUri !== codeInfo.redirect_uri) {
    return res.status(400).json({
      error: "invalid_grant"
    });
  }

  authCodes.delete(code);

  const accessToken = makeToken();

  accessTokens.set(accessToken, {
    client_id: clientId,
    scope: codeInfo.scope,
    expires_at: nowSeconds() + 3600
  });

  return res.json({
    access_token: accessToken,
    token_type: "Bearer",
    expires_in: 3600,
    scope: codeInfo.scope || "mcp"
  });
});

app.use((req, res, next) => {
  if (!validateBearer(req)) {
    return res.status(401).json({
      error: "Unauthorised"
    });
  }

  next();
});

const transport = new StreamableHTTPServerTransport({
  sessionIdGenerator: undefined
});

await mcpServer.connect(transport);

app.post("/mcp", async (req, res) => {
  await transport.handleRequest(req, res, req.body);
});

app.get("/mcp", async (req, res) => {
  await transport.handleRequest(req, res);
});

app.listen(PORT, () => {
  console.log(`Home Assistant Grok MCP with OAuth running on port ${PORT}`);
});