import{i as e,s as i,_ as t,n,t as a,a as s,x as o,l as r,r as l,b as c,c as d,d as u,p as m,e as h,f as _,D as g,g as b,h as p,j as v,C as f,k as $,m as y,o as w,q as S,u as x,v as M,w as k,y as I,z as O,A as C,B as z,E as A,F as E,G as B,H as N,I as T,J as R,K as L,L as D,M as H,N as P,O as V,P as K,S as U,Q as j,R as q,T as F,Z as G,U as J,V as Q,W,X,Y,$ as Z,a0 as ee,a1 as ie,a2 as te,a3 as ne,a4 as ae,a5 as se,a6 as oe,a7 as re,a8 as le,a9 as ce,aa as de,ab as ue,ac as me,ad as he,ae as _e,af as ge,ag as be,ah as pe,ai as ve,aj as fe,ak as $e,al as ye,am as we,an as Se,ao as xe,ap as Me,aq as ke,ar as Ie,as as Oe,at as Ce,au as ze,av as Ae,aw as Ee,ax as Be,ay as Ne,az as Te,aA as Re,aB as Le,aC as De,aD as He,aE as Pe,aF as Ve,aG as Ke,aH as Ue,aI as je,aJ as qe,aK as Fe,aL as Ge,aM as Je,aN as Qe,aO as We,aP as Xe,aQ as Ye,aR as Ze,aS as ei,aT as ii,aU as ti,aV as ni,aW as ai,aX as si,aY as oi,aZ as ri,a_ as li,a$ as ci,b0 as di,b1 as ui,b2 as mi,b3 as hi,b4 as _i,b5 as gi,b6 as bi,b7 as pi,b8 as vi,b9 as fi,ba as $i,bb as yi,bc as wi,bd as Si,be as xi,bf as Mi,bg as ki,bh as Ii,bi as Oi,bj as Ci,bk as zi,bl as Ai,bm as Ei,bn as Bi,bo as Ni,bp as Ti,bq as Ri,br as Li,bs as Di,bt as Hi,bu as Pi,bv as Vi,bw as Ki,bx as Ui,by as ji,bz as qi,bA as Fi,bB as Gi,bC as Ji,bD as Qi,bE as Wi,bF as Xi,bG as Yi,bH as Zi,bI as et,bJ as it,bK as tt,bL as nt,bM as at,bN as st,bO as ot,bP as rt,bQ as lt,bR as ct,bS as dt,bT as ut,bU as mt,bV as ht,bW as _t,bX as gt,bY as bt,bZ as pt,b_ as vt,b$ as ft,c0 as $t,c1 as yt,c2 as wt,c3 as St,c4 as xt,c5 as Mt,c6 as kt,c7 as It,c8 as Ot,c9 as Ct,ca as zt,cb as At,cc as Et,cd as Bt,ce as Nt,cf as Tt,cg as Rt,ch as Lt,ci as Dt,cj as Ht,ck as Pt,cl as Vt,cm as Kt,cn as Ut,co as jt,cp as qt,cq as Ft,cr as Gt,cs as Jt,ct as Qt,cu as Wt,cv as Xt,cw as Yt,cx as Zt,cy as en,cz as tn,cA as nn,cB as an,cC as sn,cD as on,cE as rn,cF as ln,cG as cn,cH as dn,cI as un,cJ as mn,cK as hn,cL as _n,cM as gn,cN as bn,cO as pn,cP as vn,cQ as fn,cR as $n,cS as yn,cT as wn,cU as Sn,cV as xn,cW as Mn,cX as kn,cY as In,cZ as On,c_ as Cn,c$ as zn,d0 as An,d1 as En,d2 as Bn,d3 as Nn,d4 as Tn,d5 as Rn,d6 as Ln,d7 as Dn,d8 as Hn,d9 as Pn,da as Vn,db as Kn,dc as Un,dd as jn,de as qn,df as Fn,dg as Gn,dh as Jn,di as Qn,dj as Wn,dk as Xn,dl as Yn,dm as Zn}from"./card-74d9012e.js";class ea{constructor(e){this._assigning=!1,this._value=null,this._blurEventHandler=()=>{this._setAssigning(!1)},this._keydownEventHandler=e=>{e.key&&!["Control","Alt","Shift","Meta"].includes(e.key)&&(this.setValue({key:e.key,ctrl:e.ctrlKey,alt:e.altKey,shift:e.shiftKey,meta:e.metaKey}),this._setAssigning(!1))},this._host=e,this._host.addController(this)}setValue(i){e(i,this._value)||(this._value=i,this._host.requestUpdate(),this._host.dispatchEvent(new CustomEvent("value-changed",{detail:{value:this._value}})))}getValue(){return this._value}hasValue(){return!!this._value}isAssigning(){return this._assigning}toggleAssigning(){this._setAssigning(!this._assigning)}_setAssigning(e){this._assigning=e,i(this._host,this._assigning,"assigning"),this._assigning?this._host.addEventListener("keydown",this._keydownEventHandler):this._host.removeEventListener("keydown",this._keydownEventHandler),this._host.requestUpdate()}hostConnected(){this._host.addEventListener("blur",this._blurEventHandler)}hostDisconnected(){this._host.removeEventListener("blur",this._blurEventHandler)}}let ia=class extends s{constructor(){super(...arguments),this._controller=new ea(this)}willUpdate(e){e.has("value")&&this._controller.setValue(this.value??null)}render(){if(!this.label)return;const e=e=>o`<div class="key">
        <div class="key-inner">${e}</div>
      </div>`;return o`
      <div class="label">${this.label}</div>
      <ha-button
        title="${r("key_assigner.assign")}"
        aria-label="${r("key_assigner.assign")}"
        class="assign"
        @click=${()=>{this._controller.toggleAssigning()}}
      >
        <advanced-camera-card-icon
          .icon=${{icon:"mdi:keyboard-settings"}}>
        </advanced-camera-card-icon>
      </ha-button>
      ${this._controller.hasValue()?o`<ha-button
              title="${r("key_assigner.unassign")}"
              aria-label="${r("key_assigner.unassign")}"
              @click=${()=>{this._controller.setValue(null)}}
            >
              <advanced-camera-card-icon
                .icon=${{icon:"mdi:keyboard-off"}}
              ></advanced-camera-card-icon>
            </ha-button>`:""}
      <div class="key-row">
        ${this.value?.ctrl?e(r("key_assigner.modifiers.ctrl")):""}
        ${this.value?.shift?e(r("key_assigner.modifiers.shift")):""}
        ${this.value?.meta?e(r("key_assigner.modifiers.meta")):""}
        ${this.value?.alt?e(r("key_assigner.modifiers.alt")):""}
        ${this.value?.key?e(this.value.key):""}
      </div>
      </span>`}static get styles(){return l(':host {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 10px;\n  height: 56px;\n  border: 1px solid var(--divider-color);\n}\n\n:host([assigning]) ha-button.assign span,\n:host([assigning]) ha-button.assign advanced-camera-card-icon {\n  animation: pulse 0.5s infinite;\n}\n@keyframes pulse {\n  50% {\n    color: var(--warning-color);\n  }\n}\n\nha-button {\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\nadvanced-camera-card-icon {\n  padding: 10px;\n}\n\ndiv.label {\n  width: 100px;\n  margin-left: 4px;\n}\n\ndiv.key-row {\n  flex: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\ndiv.key {\n  display: flex;\n  align-items: center;\n  height: 90%;\n  width: min-content;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n\ndiv.key-inner {\n  height: 100%;\n  width: 100%;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  padding-left: 4px;\n  padding-right: 4px;\n  border: 2px;\n  border-radius: 4px;\n  border-style: outset;\n  border-color: var(--divider-color);\n  font-family: monospace;\n  text-transform: capitalize;\n}\n\ndiv.unassigned {\n  font-style: italic;\n}\n\ndiv.key + div.key:before {\n  display: flex;\n  align-items: center;\n  margin-right: 5px;\n  content: " + ";\n}')}};t([n({attribute:!1})],ia.prototype,"label",void 0),t([n({attribute:!1})],ia.prototype,"value",void 0),ia=t([a("advanced-camera-card-key-assigner")],ia);const ta=(e,i)=>Object.keys(e.states).filter((e=>!i||e.substring(0,e.indexOf("."))===i)).sort();const na="cameras",aa="cameras.capabilities",sa="cameras.cast",oa="cameras.dependencies",ra="cameras.dimensions",la="cameras.dimensions.layout",ca="cameras.engine",da="cameras.frigate",ua="cameras.go2rtc",ma="cameras.image",ha="cameras.live_provider",_a="cameras.motioneye",ga="cameras.proxy",ba="cameras.reolink",pa="cameras.triggers",va="cameras.triggers.reviews",fa="cameras.webrtc_card",$a="cameras.media",ya="folders",wa="folders.ha",Sa="live.controls",xa="live.controls.next_previous",Ma="live.controls.ptz",ka="live.controls.thumbnails",Ia="live.controls.timeline",Oa="live.controls.timeline.format",Ca="live.display",za="live.microphone",Aa="media_gallery.controls.filter",Ea="media_gallery.controls.thumbnails",Ba="media_viewer.controls",Na="media_viewer.controls.next_previous",Ta="media_viewer.controls.thumbnails",Ra="media_viewer.controls.timeline",La="media_viewer.controls.timeline.format",Da="media_viewer.display",Ha="menu.buttons",Pa="options",Va="performance.features",Ka="performance.style",Ua="remote_control.entities",ja="status_bar.items",qa="timeline.format",Fa="timeline.controls.thumbnails",Ga="view.default_reset",Ja="view.keyboard_shortcuts",Qa="view.triggers",Wa="view.triggers.actions",Xa="configuration/cameras/README",Ya="configuration/dimensions",Za="configuration/view",es="configuration/menu",is="configuration/status-bar",ts="configuration/live",ns="configuration/folders",as="configuration/media-viewer",ss="configuration/media-gallery",os="configuration/image",rs="configuration/timeline",ls="configuration/remote-control",cs={[Ga]:"configuration/view?id=default_reset",[Qa]:"configuration/view?id=triggers",[Wa]:"configuration/view?id=trigger-action-configuration",[Ja]:"configuration/view?id=keyboard_shortcuts",[na]:"configuration/cameras/README",[aa]:"configuration/cameras/README?id=capabilities",[sa]:"configuration/cameras/README?id=cast",[oa]:"configuration/cameras/README?id=dependencies",[ra]:"configuration/cameras/README?id=dimensions",[la]:"configuration/cameras/README?id=layout-configuration",[ca]:"configuration/cameras/engine",[da]:"configuration/cameras/engine?id=frigate",[ua]:"configuration/cameras/live-provider?id=go2rtc",[ma]:"configuration/cameras/live-provider?id=image",[ha]:"configuration/cameras/live-provider",[_a]:"configuration/cameras/engine?id=motioneye",[ga]:"configuration/cameras/README?id=proxy",[ba]:"configuration/cameras/engine?id=reolink",[pa]:"configuration/cameras/README?id=triggers",[va]:"configuration/cameras/README?id=reviews",[fa]:"configuration/cameras/live-provider?id=webrtc_card",[$a]:"configuration/cameras/README?id=media",[ya]:"configuration/folders",[wa]:"configuration/folders?id=ha",[Sa]:"configuration/live?id=controls",[xa]:"configuration/live?id=next_previous",[Ma]:"configuration/live?id=ptz",[ka]:"configuration/live?id=thumbnails",[Ia]:"configuration/live?id=timeline",[Oa]:"configuration/live?id=format",[Ca]:"configuration/live?id=display",[za]:"configuration/live?id=microphone",[Aa]:"configuration/media-gallery?id=filter",[Ea]:"configuration/media-gallery?id=thumbnails",[Ba]:"configuration/media-viewer?id=controls",[Na]:"configuration/media-viewer?id=next_previous",[Ta]:"configuration/media-viewer?id=thumbnails",[Ra]:"configuration/media-viewer?id=timeline",[La]:"configuration/media-viewer?id=format",[Da]:"configuration/media-viewer?id=display",[Ha]:"configuration/menu?id=buttons",[Pa]:"configuration/README",[Va]:"configuration/performance?id=features",[Ka]:"configuration/performance?id=style",[Ua]:"configuration/remote-control?id=entities",[ja]:"configuration/status-bar?id=items",[qa]:"configuration/timeline?id=format",[Fa]:"configuration/timeline?id=thumbnails"},ds={cameras:{icon:"video",name:r("editor.cameras"),secondary:r("editor.cameras_secondary")},view:{icon:"eye",name:r("editor.view"),secondary:r("editor.view_secondary")},menu:{icon:"menu",name:r("editor.menu"),secondary:r("editor.menu_secondary")},status_bar:{icon:"sign-text",name:r("editor.status_bar"),secondary:r("editor.status_bar_secondary")},live:{icon:"cctv",name:r("editor.live"),secondary:r("editor.live_secondary")},folders:{icon:"folder-multiple",name:r("editor.folders"),secondary:r("editor.folders")},media_gallery:{icon:"play-box-multiple",name:r("editor.media_gallery"),secondary:r("editor.media_gallery_secondary")},media_viewer:{icon:"filmstrip",name:r("editor.media_viewer"),secondary:r("editor.media_viewer_secondary")},image:{icon:"image",name:r("editor.image"),secondary:r("editor.image_secondary")},timeline:{icon:"chart-gantt",name:r("editor.timeline"),secondary:r("editor.timeline_secondary")},dimensions:{icon:"aspect-ratio",name:r("editor.dimensions"),secondary:r("editor.dimensions_secondary")},performance:{icon:"speedometer",name:r("editor.performance"),secondary:r("editor.performance_secondary")},profiles:{icon:"folder-wrench-outline",name:r("editor.profiles"),secondary:r("editor.profiles_secondary")},remote_control:{icon:"remote",name:r("editor.remote_control"),secondary:r("editor.remote_control_secondary")},overrides:{icon:"file-replace",name:r("editor.overrides"),secondary:r("editor.overrides_secondary")}};let us=class extends s{constructor(){super(...arguments),this._defaults=d(Zn),this._initialized=!1,this._configUpgradeable=!1,this._expandedMenus={},this._viewModes=[{value:"",label:""},{value:"auto",label:r("config.view.views.auto")},{value:"clip",label:r("config.view.views.clip")},{value:"clips",label:r("config.view.views.clips")},{value:"folder",label:r("config.view.views.folder")},{value:"folders",label:r("config.view.views.folders")},{value:"gallery",label:r("config.view.views.gallery")},{value:"image",label:r("config.view.views.image")},{value:"live",label:r("config.view.views.live")},{value:"media",label:r("config.view.views.media")},{value:"recording",label:r("config.view.views.recording")},{value:"recordings",label:r("config.view.views.recordings")},{value:"review",label:r("config.view.views.review")},{value:"reviews",label:r("config.view.views.reviews")},{value:"snapshot",label:r("config.view.views.snapshot")},{value:"snapshots",label:r("config.view.views.snapshots")},{value:"timeline",label:r("config.view.views.timeline")}],this._cameraSelectViewModes=[...this._viewModes,{value:"current",label:r("config.view.views.current")}],this._filterModes=[{value:"",label:""},{value:"none",label:r("config.common.controls.filter.modes.none")},{value:"left",label:r("config.common.controls.filter.modes.left")},{value:"right",label:r("config.common.controls.filter.modes.right")}],this._menuStyles=[{value:"",label:""},{value:"none",label:r("config.menu.styles.none")},{value:"hidden",label:r("config.menu.styles.hidden")},{value:"overlay",label:r("config.menu.styles.overlay")},{value:"hover",label:r("config.menu.styles.hover")},{value:"hover-card",label:r("config.menu.styles.hover-card")},{value:"outside",label:r("config.menu.styles.outside")}],this._menuPositions=[{value:"",label:""},{value:"left",label:r("config.menu.positions.left")},{value:"right",label:r("config.menu.positions.right")},{value:"top",label:r("config.menu.positions.top")},{value:"bottom",label:r("config.menu.positions.bottom")}],this._menuAlignments=[{value:"",label:""},{value:"left",label:r("config.menu.alignments.left")},{value:"right",label:r("config.menu.alignments.right")},{value:"top",label:r("config.menu.alignments.top")},{value:"bottom",label:r("config.menu.alignments.bottom")}],this._nextPreviousControlStyles=[{value:"",label:""},{value:"chevrons",label:r("config.common.controls.next_previous.styles.chevrons")},{value:"icons",label:r("config.common.controls.next_previous.styles.icons")},{value:"none",label:r("config.common.controls.next_previous.styles.none")},{value:"thumbnails",label:r("config.common.controls.next_previous.styles.thumbnails")}],this._aspectRatioModes=[{value:"",label:""},{value:"dynamic",label:r("config.dimensions.aspect_ratio_modes.dynamic")},{value:"static",label:r("config.dimensions.aspect_ratio_modes.static")},{value:"unconstrained",label:r("config.dimensions.aspect_ratio_modes.unconstrained")}],this._thumbnailModes=[{value:"",label:""},{value:"none",label:r("config.common.controls.thumbnails.modes.none")},{value:"above",label:r("config.common.controls.thumbnails.modes.above")},{value:"below",label:r("config.common.controls.thumbnails.modes.below")},{value:"left",label:r("config.common.controls.thumbnails.modes.left")},{value:"right",label:r("config.common.controls.thumbnails.modes.right")}],this._thumbnailMediaTypes=[{value:"",label:""},{value:"auto",label:r("config.common.media_types.auto")},{value:"events",label:r("config.common.media_types.events")},{value:"recordings",label:r("config.common.media_types.recordings")},{value:"reviews",label:r("config.common.media_types.reviews")}],this._timelineThumbnailMediaTypes=[{value:"",label:""},{value:"auto",label:r("config.common.media_types.auto")},{value:"events",label:r("config.common.media_types.events")},{value:"reviews",label:r("config.common.media_types.reviews")}],this._thumbnailEventsMediaTypes=[{value:"",label:""},{value:"all",label:r("config.common.events_media_types.all")},{value:"clips",label:r("config.common.events_media_types.clips")},{value:"snapshots",label:r("config.common.events_media_types.snapshots")}],this._cameraMediaReviewedOptions=[{value:"",label:""},{value:"unreviewed",label:r("config.cameras.media.revieweds.unreviewed")},{value:"reviewed",label:r("config.cameras.media.revieweds.reviewed")},{value:"all",label:r("config.cameras.media.revieweds.all")}],this._transitionEffects=[{value:"",label:""},{value:"none",label:r("config.media_viewer.transition_effects.none")},{value:"slide",label:r("config.media_viewer.transition_effects.slide")}],this._imageModes=[{value:"",label:""},{value:"camera",label:r("config.common.image.modes.camera")},{value:"entity",label:r("config.common.image.modes.entity")},{value:"screensaver",label:r("config.common.image.modes.screensaver")},{value:"url",label:r("config.common.image.modes.url")}],this._timelineEventsMediaTypes=[{value:"",label:""},{value:"all",label:r("config.common.events_media_types.all")},{value:"clips",label:r("config.common.events_media_types.clips")},{value:"snapshots",label:r("config.common.events_media_types.snapshots")}],this._timelineStyleTypes=[{value:"",label:""},{value:"ribbon",label:r("config.common.timeline.styles.ribbon")},{value:"stack",label:r("config.common.timeline.styles.stack")}],this._mediaActionNegativeConditions=[{value:"",label:""},{value:"unselected",label:r("config.common.media_action_conditions.unselected")},{value:"hidden",label:r("config.common.media_action_conditions.hidden")}],this._mediaActionPositiveConditions=[{value:"",label:""},{value:"selected",label:r("config.common.media_action_conditions.selected")},{value:"visible",label:r("config.common.media_action_conditions.visible")}],this._mediaLiveUnmuteConditions=[...this._mediaActionPositiveConditions,{value:"microphone",label:r("config.common.media_action_conditions.microphone_unmute")}],this._mediaLiveMuteConditions=[...this._mediaActionNegativeConditions,{value:"microphone",label:r("config.common.media_action_conditions.microphone_mute")}],this._layoutFits=[{value:"",label:""},{value:"contain",label:r("config.cameras.dimensions.layout.fits.contain")},{value:"cover",label:r("config.cameras.dimensions.layout.fits.cover")},{value:"fill",label:r("config.cameras.dimensions.layout.fits.fill")}],this._miniTimelineModes=[{value:"",label:""},{value:"none",label:r("config.common.controls.timeline.modes.none")},{value:"above",label:r("config.common.controls.timeline.modes.above")},{value:"below",label:r("config.common.controls.timeline.modes.below")}],this._profiles=[{value:"",label:""},{value:"casting",label:r("config.profiles.casting")},{value:"low-performance",label:r("config.profiles.low-performance")},{value:"scrubbing",label:r("config.profiles.scrubbing")}],this._go2rtcModes=[{value:"",label:""},{value:"mse",label:r("config.cameras.go2rtc.modes.mse")},{value:"webrtc",label:r("config.cameras.go2rtc.modes.webrtc")},{value:"mp4",label:r("config.cameras.go2rtc.modes.mp4")},{value:"mjpeg",label:r("config.cameras.go2rtc.modes.mjpeg")}],this._microphoneButtonTypes=[{value:"",label:""},{value:"momentary",label:r("config.menu.buttons.types.momentary")},{value:"toggle",label:r("config.menu.buttons.types.toggle")}],this._displayModes=[{value:"",label:""},{value:"single",label:r("display_modes.single")},{value:"grid",label:r("display_modes.grid")}],this._gridSelectPositions=[{value:"",label:""},{value:"default",label:r("config.common.display.grid_selected_positions.default")},{value:"first",label:r("config.common.display.grid_selected_positions.first")},{value:"last",label:r("config.common.display.grid_selected_positions.last")}],this._castMethods=[{value:"",label:""},{value:"standard",label:r("config.cameras.cast.methods.standard")},{value:"dashboard",label:r("config.cameras.cast.methods.dashboard")}],this._cameraMediaTypes=[{value:"",label:""},{value:"auto",label:r("config.common.media_types.auto")},{value:"events",label:r("config.common.media_types.events")},{value:"recordings",label:r("config.common.media_types.recordings")},{value:"reviews",label:r("config.common.media_types.reviews")},{value:"folder",label:r("config.common.media_types.folder")}],this._ptzModes=[{value:"",label:""},{value:"on",label:r("config.live.controls.ptz.modes.on")},{value:"off",label:r("config.live.controls.ptz.modes.off")}],this._ptzOrientations=[{value:"",label:""},{value:"vertical",label:r("config.live.controls.ptz.orientations.vertical")},{value:"horizontal",label:r("config.live.controls.ptz.orientations.horizontal")}],this._ptzTypes=[{value:"",label:""},{value:"buttons",label:r("config.live.controls.ptz.types.buttons")},{value:"gestures",label:r("config.live.controls.ptz.types.gestures")}],this._ptzPositions=[{value:"",label:""},{value:"top-left",label:r("config.live.controls.ptz.positions.top-left")},{value:"top-right",label:r("config.live.controls.ptz.positions.top-right")},{value:"bottom-left",label:r("config.live.controls.ptz.positions.bottom-left")},{value:"bottom-right",label:r("config.live.controls.ptz.positions.bottom-right")}],this._triggersActionsInteractionModes=[{value:"",label:""},{value:"all",label:r("config.view.triggers.actions.interaction_modes.all")},{value:"inactive",label:r("config.view.triggers.actions.interaction_modes.inactive")},{value:"active",label:r("config.view.triggers.actions.interaction_modes.active")}],this._triggersActionsTrigger=[{value:"",label:""},{value:"default",label:r("config.view.triggers.actions.triggers.default")},{value:"live",label:r("config.view.triggers.actions.triggers.live")},{value:"media",label:r("config.view.triggers.actions.triggers.media")},{value:"none",label:r("config.view.triggers.actions.triggers.none")}],this._triggersActionsUntrigger=[{value:"",label:""},{value:"default",label:r("config.view.triggers.actions.untriggers.default")},{value:"none",label:r("config.view.triggers.actions.untriggers.none")}],this._triggersEvents=[{value:"",label:""},{value:"events",label:r("config.cameras.triggers.events.events")},{value:"clips",label:r("config.cameras.triggers.events.clips")},{value:"snapshots",label:r("config.cameras.triggers.events.snapshots")}],this._severities=[{value:"",label:""},{value:"high",label:r("common.severities.high")},{value:"medium",label:r("common.severities.medium")},{value:"low",label:r("common.severities.low")}],this._timelinePanModes=[{value:"",label:""},{value:"pan",label:r("config.common.controls.timeline.pan_modes.pan")},{value:"seek",label:r("config.common.controls.timeline.pan_modes.seek")},{value:"seek-in-media",label:r("config.common.controls.timeline.pan_modes.seek-in-media")},{value:"seek-in-camera",label:r("config.common.controls.timeline.pan_modes.seek-in-camera")}],this._capabilities=(()=>{const e={"2-way-audio":r("config.cameras.capabilities.capabilities.2-way-audio"),clips:r("config.cameras.capabilities.capabilities.clips"),"favorite-events":r("config.cameras.capabilities.capabilities.favorite-events"),"favorite-recordings":r("config.cameras.capabilities.capabilities.favorite-recordings"),live:r("config.cameras.capabilities.capabilities.live"),menu:r("config.cameras.capabilities.capabilities.menu"),ptz:r("config.cameras.capabilities.capabilities.ptz"),recordings:r("config.cameras.capabilities.capabilities.recordings"),"remote-control-entity":r("config.cameras.capabilities.capabilities.remote-control-entity"),reviews:r("config.cameras.capabilities.capabilities.reviews"),seek:r("config.cameras.capabilities.capabilities.seek"),snapshots:r("config.cameras.capabilities.capabilities.snapshots"),substream:r("config.cameras.capabilities.capabilities.substream"),trigger:r("config.cameras.capabilities.capabilities.trigger")};return[{value:"",label:""},...Object.entries(e).map((([e,i])=>({value:e,label:i})))]})(),this._forceableCapabilities=[{value:"",label:""},{value:"2-way-audio",label:r("config.cameras.capabilities.capabilities.2-way-audio")}],this._defaultResetInteractionModes=[{value:"",label:""},{value:"all",label:r("config.view.default_reset.interaction_modes.all")},{value:"inactive",label:r("config.view.default_reset.interaction_modes.inactive")},{value:"active",label:r("config.view.default_reset.interaction_modes.active")}],this._proxyModes=[{value:"",label:""},{value:"auto",label:r("config.cameras.proxy.modes.auto")},{value:!0,label:r("config.cameras.proxy.modes.true")},{value:!1,label:r("config.cameras.proxy.modes.false")}],this._proxySSLCiphers=[{value:"",label:""},{value:"auto",label:r("config.cameras.proxy.ssl_ciphers.auto")},{value:"default",label:r("config.cameras.proxy.ssl_ciphers.default")},{value:"insecure",label:r("config.cameras.proxy.ssl_ciphers.insecure")},{value:"intermediate",label:r("config.cameras.proxy.ssl_ciphers.intermediate")},{value:"modern",label:r("config.cameras.proxy.ssl_ciphers.modern")}],this._proxySSLVerification=[{value:"",label:""},{value:"auto",label:r("config.cameras.proxy.ssl_verification.auto")},{value:!0,label:r("config.cameras.proxy.ssl_verification.true")},{value:!1,label:r("config.cameras.proxy.ssl_verification.false")}],this._reolinkMediaResolution=[{value:"",label:""},{value:"high",label:r("config.cameras.reolink.media_resolution.high")},{value:"low",label:r("config.cameras.reolink.media_resolution.low")}],this._statusBarStyles=[{value:"",label:""},{value:"hover",label:r("config.status_bar.styles.hover")},{value:"hover-card",label:r("config.status_bar.styles.hover-card")},{value:"none",label:r("config.status_bar.styles.none")},{value:"outside",label:r("config.status_bar.styles.outside")},{value:"overlay",label:r("config.status_bar.styles.overlay")},{value:"popup",label:r("config.status_bar.styles.popup")}],this._statusBarPositions=[{value:"",label:""},{value:"top",label:r("config.status_bar.positions.top")},{value:"bottom",label:r("config.status_bar.positions.bottom")}],this._themes=[{value:"",label:""},{value:"ha",label:r("config.view.theme.themes.ha")},{value:"dark",label:r("config.view.theme.themes.dark")},{value:"light",label:r("config.view.theme.themes.light")},{value:"traditional",label:r("config.view.theme.themes.traditional")}],this._rotations=[{value:"",label:""},{value:0,label:r("config.cameras.dimensions.rotations.0")},{value:90,label:r("config.cameras.dimensions.rotations.90")},{value:180,label:r("config.cameras.dimensions.rotations.180")},{value:270,label:r("config.cameras.dimensions.rotations.270")}]}setConfig(e){this._config=e,this._configUpgradeable=u(e);const i=m.safeParse(this._config.profiles);if(i.success){const e=d(Zn);h(this._config,e,i.data),this._defaults=e}}willUpdate(){this._initialized||_().then((e=>{e&&(this._initialized=!0)}))}_renderOptionSetHeader(e,i){const t=ds[e];return o`
      <div
        class="option option-${e}"
        @click=${this._toggleMenu}
        .domain=${"options"}
        .key=${e}
      >
        <div class="row">
          <advanced-camera-card-icon
            .icon=${{icon:`mdi:${t.icon}`}}
          ></advanced-camera-card-icon>
          <div class="title ${i??""}">${t.name}</div>
        </div>
        <div class="secondary">${t.secondary}</div>
      </div>
    `}_renderDocLinkRow(e){return o`
      <a
        class="doc-link-row"
        href="${g}/#/${e}"
        target="_blank"
        rel="noopener noreferrer"
        title=${r("editor.docs")}
      >
        <ha-icon icon="mdi:book-open-page-variant"></ha-icon>
        <div>${r("editor.docs")}</div>
        <ha-icon icon="mdi:open-in-new"></ha-icon>
      </a>
    `}_getLabel(e){const i=e.split(".").filter((e=>!e.match(/^\[[0-9]+\]$/))).join(".");return r(`config.${i}`)}_renderEntitySelector(e,i){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{entity:{domain:i}}}
        .label=${this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderOptionSelector(e,i=[],t){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{select:{mode:"dropdown",multiple:!!t?.multiple,custom_value:!i.length,options:i}}}
        .label=${t?.label||this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderIconSelector(e,i){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{icon:{}}}
        .label=${i?.label||this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderNumberInput(e,i){if(!this._config)return;const t=b(this._config,e),n=void 0===i?.max?"box":"slider";return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{number:{min:i?.min||0,max:i?.max,mode:n,step:i?.step}}}
        .label=${i?.label||this._getLabel(e)}
        .value=${t??i?.default}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderInfo(e){return o` <span class="info">${e}</span>`}_getEditorCameraTitle(e,i){return"string"==typeof i?.title&&i.title||("string"==typeof i?.camera_entity?p(this.hass,i.camera_entity):"")||"object"==typeof i?.webrtc_card&&i.webrtc_card&&"string"==typeof i.webrtc_card.entity&&i.webrtc_card.entity||("object"==typeof i?.frigate&&i.frigate&&"string"==typeof i?.frigate.camera_name&&i.frigate.camera_name?v(i.frigate.camera_name):"")||"string"==typeof i?.id&&i.id||r("editor.camera")+" #"+e}_getEditorFolderTitle(e,i){return"string"==typeof i?.title&&i.title||"string"==typeof i?.id&&i.id||r("common.folder")+" #"+e}_renderViewDefaultResetMenu(){return this._putInSubmenu(Ga,!0,`config.${f}.editor_label`,"mdi:restart",o`
        ${this._renderSwitch($,this._defaults.view.default_reset.after_interaction)}
        ${this._renderNumberInput(y)}
        ${this._renderOptionSelector(w,this._defaultResetInteractionModes,{label:r("config.view.default_reset.interaction_mode")})},
        ${this._renderOptionSelector(S,this.hass?ta(this.hass):[],{multiple:!0})}
      `)}_renderViewTriggersMenu(){return this._putInSubmenu(Qa,!0,`config.${x}.editor_label`,"mdi:target-account",o`
        ${this._renderSwitch(M,this._defaults.view.triggers.filter_selected_camera,{label:r(`config.${M}`)})}
        ${this._renderSwitch(k,this._defaults.view.triggers.show_trigger_status,{label:r(`config.${k}`)})}
        ${this._renderNumberInput(I,{default:this._defaults.view.triggers.untrigger_delay_seconds})}
        ${this._renderNumberInput(O,{default:this._defaults.view.triggers.untrigger_force_seconds})}
        ${this._putInSubmenu(Wa,!0,`config.${C}.editor_label`,"mdi:cogs",o` ${this._renderOptionSelector(z,this._triggersActionsTrigger,{label:r("config.view.triggers.actions.trigger")})}
          ${this._renderOptionSelector(A,this._triggersActionsUntrigger,{label:r("config.view.triggers.actions.untrigger")})}
          ${this._renderOptionSelector(E,this._triggersActionsInteractionModes,{label:r("config.view.triggers.actions.interaction_mode")})}`)}
      `)}_renderKeyAssigner(e,i){return o` <advanced-camera-card-key-assigner
      .label=${r(`config.${e}`)}
      .value=${this._config?b(this._config,e,i):null}
      @value-changed=${i=>this._valueChangedHandler(e,i)}
    ></advanced-camera-card-key-assigner>`}_renderViewKeyboardShortcutMenu(){return this._putInSubmenu(Ja,!0,`config.${B}.editor_label`,"mdi:keyboard",o`
        ${this._renderSwitch(N,this._defaults.view.keyboard_shortcuts.enabled,{label:r(`config.${N}`)})}
        ${this._renderKeyAssigner(T,this._defaults.view.keyboard_shortcuts.ptz_left)}
        ${this._renderKeyAssigner(R,this._defaults.view.keyboard_shortcuts.ptz_right)}
        ${this._renderKeyAssigner(L,this._defaults.view.keyboard_shortcuts.ptz_up)}
        ${this._renderKeyAssigner(D,this._defaults.view.keyboard_shortcuts.ptz_down)}
        ${this._renderKeyAssigner(H,this._defaults.view.keyboard_shortcuts.ptz_zoom_in)}
        ${this._renderKeyAssigner(P,this._defaults.view.keyboard_shortcuts.ptz_zoom_out)}
        ${this._renderKeyAssigner(V,this._defaults.view.keyboard_shortcuts.ptz_home)}
      `)}_renderStatusBarItem(e){return o` ${this._putInSubmenu(ja,e,`config.status_bar.items.${e}`,"mdi:feature-search",o`
        ${this._renderSwitch(`${K}.${e}.enabled`,this._defaults.status_bar.items[e]?.enabled??!0,{label:r("config.status_bar.items.enabled")})}
        ${this._renderNumberInput(`${K}.${e}.priority`,{max:U,default:this._defaults.status_bar.items[e]?.priority,label:r("config.status_bar.items.priority")})}
      `)}`}_renderMenuButton(e,i){const t=[{value:"",label:""},{value:"matching",label:r("config.menu.buttons.alignments.matching")},{value:"opposing",label:r("config.menu.buttons.alignments.opposing")}];return o` ${this._putInSubmenu(Ha,e,`config.menu.buttons.${e}`,"mdi:gesture-tap-button",o`
        ${this._renderSwitch(`${j}.${e}.enabled`,this._defaults.menu.buttons[e]?.enabled??!0,{label:r("config.menu.buttons.enabled")})}
        ${this._renderOptionSelector(`${j}.${e}.alignment`,t,{label:r("config.menu.buttons.alignment")})}
        ${this._renderSwitch(`${j}.${e}.permanent`,this._defaults.menu.buttons[e]?.permanent??!1,{label:r("config.menu.buttons.permanent")})}
        ${this._renderNumberInput(`${j}.${e}.priority`,{max:q,default:this._defaults.menu.buttons[e]?.priority,label:r("config.menu.buttons.priority")})}
        ${this._renderIconSelector(`${j}.${e}.icon`,{label:r("config.menu.buttons.icon")})}
        ${i}
      `)}`}_putInSubmenu(e,i,t,n,a){const s=this._expandedMenus[e]===i,l=cs[e];return o` <div class="${F({submenu:!0,selected:s})}">
      <div
        class="submenu-header"
        @click=${this._toggleMenu}
        .domain=${e}
        .key=${i}
      >
        <advanced-camera-card-icon .icon=${{icon:n}}></advanced-camera-card-icon>
        <span>${r(t)}</span>
      </div>
      ${s?o`<div class="values">
            ${l?this._renderDocLinkRow(l):""} ${a}
          </div>`:""}
    </div>`}_renderMediaLayout(e,i,t,n,a,s,l,c,d,u,m,h){return this._putInSubmenu(e,!0,i,"mdi:page-layout-body",o`
        ${this._renderNumberInput(u,{min:G,max:J,label:r("config.cameras.dimensions.layout.zoom"),step:.1})}
        ${this._renderNumberInput(m,{min:0,max:100,label:r("config.cameras.dimensions.layout.pan.x")})}
        ${this._renderNumberInput(h,{min:0,max:100,label:r("config.cameras.dimensions.layout.pan.y")})}
        ${this._renderOptionSelector(t,this._layoutFits,{label:r("config.cameras.dimensions.layout.fit")})}
        ${this._putInSubmenu(`${e}.position`,!0,"config.cameras.dimensions.layout.position.editor_label","mdi:aspect-ratio",o` ${this._renderNumberInput(n,{min:0,max:100,label:r("config.cameras.dimensions.layout.position.x")})}
          ${this._renderNumberInput(a,{min:0,max:100,label:r("config.cameras.dimensions.layout.position.y")})}`)}
        ${this._putInSubmenu(`${e}.view_box`,!0,"config.cameras.dimensions.layout.view_box.editor_label","mdi:crop",o`
            ${this._renderNumberInput(s,{min:0,max:100,label:r("config.cameras.dimensions.layout.view_box.top")})}
            ${this._renderNumberInput(l,{min:0,max:100,label:r("config.cameras.dimensions.layout.view_box.bottom")})}
            ${this._renderNumberInput(c,{min:0,max:100,label:r("config.cameras.dimensions.layout.view_box.left")})}
            ${this._renderNumberInput(d,{min:0,max:100,label:r("config.cameras.dimensions.layout.view_box.right")})}
          `)}
      `)}_renderTimelineCoreControls(e,i,t,n,a,s,l,c,d){return o`
      ${this._renderOptionSelector(i,this._timelineStyleTypes,{label:r(`config.common.${Q}`)})}
      ${d?this._renderOptionSelector(d,this._timelinePanModes,{label:r("config.common.controls.timeline.pan_mode")}):""}
      ${this._renderNumberInput(t,{label:r(`config.common.${W}`)})}
      ${this._renderNumberInput(n,{label:r(`config.common.${X}`)})}
      ${this._renderSwitch(a,l,{label:r(`config.common.${Y}`)})}
      ${this._putInSubmenu(e,!0,"config.common.controls.timeline.format.editor_label","mdi:clock-edit",o`
          ${this._renderSwitch(s,c,{label:r("config.common.controls.timeline.format.24h")})}
        `)}
    `}_renderMiniTimeline(e,i,t,n,a,s,l,c,d,u,m){return this._putInSubmenu(e,!0,"config.common.controls.timeline.editor_label","mdi:chart-gantt",o` ${this._renderOptionSelector(t,this._miniTimelineModes,{label:r("config.common.controls.timeline.mode")})}
      ${this._renderTimelineCoreControls(i,n,a,s,l,c,d,u,m)}`)}_renderViewDisplay(e,i,t,n,a,s){return this._putInSubmenu(e,!0,"config.common.display.editor_label","mdi:palette-swatch",o`
        ${this._renderOptionSelector(i,this._displayModes,{label:r("config.common.display.mode")})}
        ${this._renderOptionSelector(t,this._gridSelectPositions,{label:r("config.common.display.grid_selected_position")})}
        ${this._renderNumberInput(n,{min:0,label:r("config.common.display.grid_selected_width_factor")})}
        ${this._renderNumberInput(a,{min:0,label:r("config.common.display.grid_columns")})}
        ${this._renderNumberInput(s,{min:0,label:r("config.common.display.grid_max_columns")})}
      `)}_renderNextPreviousControls(e,i,t,n){return this._putInSubmenu(e,!0,"config.common.controls.next_previous.editor_label","mdi:arrow-right-bold-circle",o`
        ${this._renderOptionSelector(i,this._nextPreviousControlStyles.filter((e=>!(!n?.allowThumbnails&&"thumbnails"===e.value||!n?.allowIcons&&"icons"===e.value))),{label:r("config.common.controls.next_previous.style")})}
        ${this._renderNumberInput(t,{min:Z,label:r("config.common.controls.next_previous.size")})}
      `)}_renderThumbnailsControls(e,i,t,n,a,s,l,c,d,u){return this._putInSubmenu(e,!0,"config.common.controls.thumbnails.editor_label","mdi:image-text",o`
        ${u?.configPathMode?o`${this._renderOptionSelector(u.configPathMode,this._thumbnailModes,{label:r("config.common.controls.thumbnails.mode")})}`:o``}
        ${this._renderNumberInput(i,{min:ee,max:ie,label:r("config.common.controls.thumbnails.size")})}
        ${this._renderSwitch(t,d.show_details,{label:r("config.common.controls.thumbnails.show_details")})}
        ${this._renderSwitch(n,d.show_favorite_control,{label:r("config.common.controls.thumbnails.show_favorite_control")})}
        ${this._renderSwitch(a,d.show_timeline_control,{label:r("config.common.controls.thumbnails.show_timeline_control")})}
        ${this._renderSwitch(s,d.show_download_control,{label:r("config.common.controls.thumbnails.show_download_control")})}
        ${this._renderSwitch(l,d.show_review_control,{label:r("config.common.controls.thumbnails.show_review_control")})}
        ${this._renderSwitch(c,d.show_info_control,{label:r("config.common.controls.thumbnails.show_info_control")})}
      `)}_renderFilterControls(e,i){return this._putInSubmenu(e,!0,"config.common.controls.filter.editor_label","mdi:filter-cog",o`
        ${i?o`${this._renderOptionSelector(i,this._filterModes,{label:r("config.common.controls.filter.mode")})}`:o``}
      `)}_renderImageOptions(e,i,t,n,a){return o`
      ${this._renderOptionSelector(e,this._imageModes,{label:r("config.common.image.mode")})}
      ${this._renderStringInput(i,{label:r("config.common.image.url")})}
      ${this._renderOptionSelector(t,this.hass?ta(this.hass):[],{label:r("config.common.image.entity")})}
      ${this._renderStringInput(n,{label:r("config.common.image.entity_parameters")})}
      ${this._renderNumberInput(a,{label:r("config.common.image.refresh_seconds")})}
    `}_modifyConfig(e){if(this._config){const i=d(this._config);e(i)&&this._updateConfig(i)}}_renderArrayManagementControls(e,i,t,n){const a=this._config?b(this._config,e):null;return o`
      <div class="controls">
        <ha-icon-button
          .label=${r("editor.move_up")}
          .disabled=${n||!this._config||!Array.isArray(a)||i<=0}
          @click=${()=>!n&&this._modifyConfig((n=>{const a=b(n,e);return!!(Array.isArray(a)&&i>0)&&(te(a,i,i-1),this._openMenu(t,i-1),!0)}))}
        >
          <advanced-camera-card-icon
            .icon=${{icon:"mdi:arrow-up"}}
          ></advanced-camera-card-icon>
        </ha-icon-button>
        <ha-icon-button
          .label=${r("editor.move_down")}
          .disabled=${n||!this._config||!Array.isArray(this._config.cameras)||i>=this._config.cameras.length-1}
          @click=${()=>!n&&this._modifyConfig((n=>{const a=b(n,e);return!!(Array.isArray(a)&&i<a.length-1)&&(te(a,i,i+1),this._openMenu(t,i+1),!0)}))}
        >
          <advanced-camera-card-icon
            .icon=${{icon:"mdi:arrow-down"}}
          ></advanced-camera-card-icon>
        </ha-icon-button>
        <ha-icon-button
          .label=${r("editor.delete")}
          .disabled=${n}
          @click=${()=>{this._modifyConfig((n=>{const a=b(n,e);return!!Array.isArray(a)&&(a.splice(i,1),this._closeMenu(t),!0)}))}}
        >
          <advanced-camera-card-icon
            .icon=${{icon:"mdi:delete"}}
          ></advanced-camera-card-icon>
        </ha-icon-button>
      </div>
    `}_renderFolder(e,i,t){const n={submenu:!0,selected:this._expandedMenus[ya]===i},a=[{value:"",label:""},{value:"ha",label:r("config.folders.types.ha")}];return o` <div class="${F(n)}">
      <div
        class="submenu-header"
        @click=${this._toggleMenu}
        .domain=${ya}
        .key=${i}
      >
        <advanced-camera-card-icon
          .icon=${{icon:t?"mdi:folder-plus":"mdi:folder"}}
        ></advanced-camera-card-icon>
        <span>
          ${t?o` <span class="new"> [${r("editor.add_new_folder")}...] </span>`:o`<span
                >${this._getEditorFolderTitle(i,e[i]||{})}</span
              >`}
        </span>
      </div>
      ${this._expandedMenus[ya]===i?o` <div class="values">
            ${this._renderArrayManagementControls(ne,i,ya,t)}
            ${this._renderOptionSelector(ae(Rt,i),a)}
            ${this._renderStringInput(ae(Lt,i))}
            ${this._renderIconSelector(ae(Dt,i),{label:r("config.folders.icon")})}
            ${this._renderStringInput(ae(Ht,i))}
            ${this._putInSubmenu(wa,i,"config.folders.ha.editor_label","mdi:home-assistant",o`
                ${this._renderStringInput(ae(Pt,i))}
                ${se({message:r("config.folders.ha.path_info"),icon:"mdi:information-outline",url:{link:oe,title:r("error.configuration")}})}
              `)}
          </div>`:""}
    </div>`}_renderCamera(e,i,t,n,a){const s=[{value:"",label:""},{value:"auto",label:r("config.cameras.live_providers.auto")},{value:"ha",label:r("config.cameras.live_providers.ha")},{value:"image",label:r("config.cameras.live_providers.image")},{value:"jsmpeg",label:r("config.cameras.live_providers.jsmpeg")},{value:"go2rtc",label:r("config.cameras.live_providers.go2rtc")},{value:"webrtc-card",label:r("config.cameras.live_providers.webrtc-card")}],l=[];e.forEach(((e,t)=>{t!==i&&l.push({value:re(e),label:this._getEditorCameraTitle(t,e)})}));const c=[];n.forEach(((e,i)=>{c.push({value:le(e,i),label:this._getEditorFolderTitle(i,e)})}));const d={submenu:!0,selected:this._expandedMenus[na]===i};return o`
      <div class="${F(d)}">
        <div
          class="submenu-header"
          @click=${this._toggleMenu}
          .domain=${na}
          .key=${i}
        >
          <advanced-camera-card-icon
            .icon=${{icon:a?"mdi:video-plus":"mdi:video"}}
          ></advanced-camera-card-icon>
          <span>
            ${a?o` <span class="new">
                  [${r("editor.add_new_camera")}...]
                </span>`:o`<span
                  >${this._getEditorCameraTitle(i,e[i]||{})}</span
                >`}
          </span>
        </div>
        ${this._expandedMenus[na]===i?o` <div class="values">
              ${this._renderArrayManagementControls(ce,i,na,a)}
              ${this._renderEntitySelector(ae(Vt,i),"camera")}
              ${this._renderOptionSelector(ae(Kt,i),s)}
              ${this._renderStringInput(ae(Ut,i))}
              ${this._renderIconSelector(ae(jt,i),{label:r("config.cameras.icon")})}
              ${this._renderStringInput(ae(qt,i))}
              ${this._renderSwitch(ae(Ft,i),this._defaults.cameras.always_error_if_entity_unavailable)}
              ${this._putInSubmenu(ca,!0,"config.cameras.engines.editor_label","mdi:engine",o`${this._putInSubmenu(da,i,"config.cameras.frigate.editor_label","frigate",o`
                    ${this._renderStringInput(ae(Gt,i))}
                    ${this._renderStringInput(ae(Jt,i))}
                    ${this._renderOptionSelector(ae(Qt,i),[],{multiple:!0,label:r("config.cameras.frigate.labels")})}
                    ${this._renderOptionSelector(ae(Wt,i),[],{multiple:!0,label:r("config.cameras.frigate.zones")})}
                    ${this._renderStringInput(ae(Xt,i))}
                  `)}
                ${this._putInSubmenu(_a,i,"config.cameras.motioneye.editor_label","motioneye",o` ${this._renderStringInput(ae(Yt,i))}
                  ${this._renderStringInput(ae(Zt,i))}
                  ${this._renderStringInput(ae(en,i))}
                  ${this._renderStringInput(ae(tn,i))}
                  ${this._renderStringInput(ae(nn,i))}`)}
                ${this._putInSubmenu(ba,i,"config.cameras.reolink.editor_label","reolink",o` ${this._renderStringInput(ae(an,i))}
                  ${this._renderOptionSelector(ae(sn,i),this._reolinkMediaResolution,{label:r("config.cameras.reolink.media_resolution.editor_label")})}`)}`)}
              ${this._putInSubmenu(ha,!0,"config.cameras.live_provider_options.editor_label","mdi:cctv",o` ${this._putInSubmenu(ua,i,"config.cameras.go2rtc.editor_label","mdi:alpha-g-circle",o`${this._renderOptionSelector(ae(on,i),this._go2rtcModes,{multiple:!0,label:r("config.cameras.go2rtc.modes.editor_label")})}
                  ${this._renderStringInput(ae(rn,i))}
                  ${this._renderStringInput(ae(ln,i))}
                  ${this._renderNumberInput(ae(cn,i),{min:0,default:this._defaults.cameras.go2rtc.metadata_fetch_timeout_seconds})} `)}
                ${this._putInSubmenu(ma,!0,"config.cameras.image.editor_label","mdi:image",this._renderImageOptions(ae(dn,i),ae(un,i),ae(mn,i),ae(hn,i),ae(_n,i)))}
                ${this._putInSubmenu(fa,i,"config.cameras.webrtc_card.editor_label","mdi:webrtc",o`${this._renderEntitySelector(ae(gn,i),"camera")}
                  ${this._renderStringInput(ae(bn,i))}`)}`)}
              ${this._putInSubmenu(oa,i,"config.cameras.dependencies.editor_label","mdi:graph",o` ${this._renderSwitch(ae(pn,i),this._defaults.cameras.dependencies.all_cameras)}
                ${this._renderOptionSelector(ae(vn,i),l,{multiple:!0})}`)}
              ${this._putInSubmenu(pa,i,"config.cameras.triggers.editor_label","mdi:magnify-scan",o`
                  ${this._renderSwitch(ae(fn,i),this._defaults.cameras.triggers.occupancy)}
                  ${this._renderSwitch(ae($n,i),this._defaults.cameras.triggers.motion)}
                  ${this._renderOptionSelector(ae(yn,i),t,{multiple:!0})}
                  ${this._renderOptionSelector(ae(wn,i),this._triggersEvents,{multiple:!0,label:r("config.cameras.triggers.events.editor_label")})}
                  ${this._putInSubmenu(va,i,"config.cameras.triggers.reviews.editor_label","mdi:check-circle",o`
                      ${this._renderOptionSelector(ae(Sn,i),this._severities,{multiple:!0,label:r("common.severity")})}
                      ${this._renderSwitch(ae(xn,i),this._defaults.cameras.triggers.reviews.description)}
                    `)}
                `)}
              ${this._putInSubmenu($a,i,"config.cameras.media.editor_label","mdi:play-box-outline",o`
                  ${this._renderOptionSelector(ae(Mn,i),this._cameraMediaTypes,{label:r("config.cameras.media.type")})}
                  ${this._renderOptionSelector(ae(kn,i),this._thumbnailEventsMediaTypes,{label:r("config.cameras.media.events_type")})}
                  ${this._renderOptionSelector(ae(In,i),this._cameraMediaReviewedOptions,{label:r("config.cameras.media.reviewed")})}
                  ${this._renderOptionSelector(ae(On,i),c,{multiple:!0,label:r("config.cameras.media.folders")})}
                `)}
              ${this._putInSubmenu(sa,i,"config.cameras.cast.editor_label","mdi:cast",o`
                  ${this._renderOptionSelector(ae(Cn,i),this._castMethods)}
                  ${this._renderStringInput(ae(zn,i))}
                  ${this._renderStringInput(ae(An,i))}
                `)}
              ${this._putInSubmenu(ra,i,"config.cameras.dimensions.editor_label","mdi:aspect-ratio",o`
                  ${this._renderStringInput(ae(En,i))}
                  ${this._renderOptionSelector(ae(Bn,i),this._rotations)}
                  ${this._renderMediaLayout(la,"config.cameras.dimensions.layout.editor_label",ae(Nn,i),ae(Tn,i),ae(Rn,i),ae(Ln,i),ae(Dn,i),ae(Hn,i),ae(Pn,i),ae(Vn,i),ae(Kn,i),ae(Un,i))}
                `)}
              ${this._putInSubmenu(aa,i,"config.cameras.capabilities.editor_label","mdi:cog-stop",o`
                  ${this._renderOptionSelector(ae(jn,i),this._capabilities,{multiple:!0})}
                  ${this._renderOptionSelector(ae(qn,i),this._capabilities,{multiple:!0})}
                  ${this._renderOptionSelector(ae(Fn,i),this._forceableCapabilities,{multiple:!0})}
                `)}
              ${this._putInSubmenu(ga,i,"config.cameras.proxy.editor_label","mdi:arrow-decision",o`
                  ${this._renderOptionSelector(ae(Gn,i),this._proxyModes,{label:r("config.cameras.proxy.live")})}
                  ${this._renderOptionSelector(ae(Jn,i),this._proxyModes,{label:r("config.cameras.proxy.media")})}
                  ${this._renderSwitch(ae(Qn,i),this._defaults.cameras.proxy.dynamic)}
                  ${this._renderOptionSelector(ae(Wn,i),this._proxySSLVerification,{label:r("config.cameras.proxy.ssl_verification.editor_label")})}
                  ${this._renderOptionSelector(ae(Xn,i),this._proxySSLCiphers,{label:r("config.cameras.proxy.ssl_ciphers.editor_label")})}
                `)}
            </div>`:""}
      </div>
    `}_renderStringInput(e,i){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{text:{type:i?.type||"text"}}}
        .label=${i?.label??this._getLabel(e)}
        .value=${b(this._config,e,"")}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_renderSwitch(e,i,t){if(this._config)return o`
      <ha-selector
        .hass=${this.hass}
        .selector=${{boolean:{}}}
        .label=${t?.label||this._getLabel(e)}
        .value=${b(this._config,e,i)}
        .required=${!1}
        @value-changed=${i=>this._valueChangedHandler(e,i)}
      >
      </ha-selector>
    `}_updateConfig(e){this._config=e,de(this,"config-changed",{config:this._config})}render(){if(!this.hass||!this._config)return o``;const e=ta(this.hass),i=b(this._config,ce)||[],t=b(this._config,ne)||[];return o`
      <div class="card-config">
        ${this._renderOptionSetHeader("cameras")}
        ${"cameras"===this._expandedMenus[Pa]?o`
              <div class="values">
                ${this._renderDocLinkRow(Xa)}
                ${i.map(((n,a)=>this._renderCamera(i,a,e,t)))}
                ${this._renderCamera(i,i.length,e,t,!0)}
              </div>
            `:""}
        ${this._renderOptionSetHeader("profiles")}
        ${"profiles"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderOptionSelector(ue,this._profiles,{multiple:!0,label:r("config.profiles.editor_label")})}
            </div>`:""}
        ${this._renderOptionSetHeader("view")}
        ${"view"===this._expandedMenus[Pa]?o`
              <div class="values">
                ${this._renderDocLinkRow(Za)}
                ${this._renderOptionSelector(me,this._viewModes)}
                ${this._renderOptionSelector(he,this._cameraSelectViewModes)}
                ${this._renderSwitch(_e,this._defaults.view.dim)}
                ${this._renderNumberInput(ge)}
                ${this._renderSwitch(be,this._defaults.view.default_cycle_camera)}
                ${this._renderViewDefaultResetMenu()} ${this._renderViewTriggersMenu()}
                ${this._renderViewKeyboardShortcutMenu()}
                ${this._renderOptionSelector(pe,this._themes,{label:r("config.view.theme.themes.editor_label"),multiple:!0})}
              </div>
            `:""}
        ${this._renderOptionSetHeader("menu")}
        ${"menu"===this._expandedMenus[Pa]?o`
              <div class="values">
                ${this._renderDocLinkRow(es)}
                ${this._renderOptionSelector(ve,this._menuStyles)}
                ${this._renderOptionSelector(fe,this._menuPositions)}
                ${this._renderOptionSelector($e,this._menuAlignments)}
                ${this._renderNumberInput(ye,{min:Z})}
                ${this._renderMenuButton("iris")}
                ${this._renderMenuButton("camera_ui")}
                ${this._renderMenuButton("cameras")}
                ${this._renderMenuButton("clips")}
                ${this._renderMenuButton("display_mode")}
                ${this._renderMenuButton("download")}
                ${this._renderMenuButton("expand")}
                ${this._renderMenuButton("folders")}
                ${this._renderMenuButton("fullscreen")}
                ${this._renderMenuButton("gallery")}
                ${this._renderMenuButton("image")}
                ${this._renderMenuButton("info")}
                ${this._renderMenuButton("live")}
                ${this._renderMenuButton("media_player")}
                ${this._renderMenuButton("microphone",o`${this._renderOptionSelector(`${j}.microphone.type`,this._microphoneButtonTypes,{label:r("config.menu.buttons.type")})}`)}
                ${this._renderMenuButton("mute")}
                ${this._renderMenuButton("pip")}
                ${this._renderMenuButton("play")}
                ${this._renderMenuButton("ptz_controls")}
                ${this._renderMenuButton("ptz_home")}
                ${this._renderMenuButton("recordings")}
                ${this._renderMenuButton("reviews")}
                ${this._renderMenuButton("screenshot")}
                ${this._renderMenuButton("set_review")}
                ${this._renderMenuButton("snapshots")}
                ${this._renderMenuButton("substreams")}
                ${this._renderMenuButton("timeline")}
              </div>
            `:""}
        ${this._renderOptionSetHeader("status_bar")}
        ${"status_bar"===this._expandedMenus[Pa]?o`
              <div class="values">
                ${this._renderDocLinkRow(is)}
                ${this._renderOptionSelector(we,this._statusBarStyles)}
                ${this._renderOptionSelector(Se,this._statusBarPositions)}
                ${this._renderNumberInput(xe,{min:Me,label:r("config.status_bar.height")})}
                ${this._renderNumberInput(ke,{min:0,max:60,default:this._defaults.status_bar.popup_seconds,label:r("config.status_bar.popup_seconds")})}
                ${this._renderStatusBarItem("title")}
                ${this._renderStatusBarItem("resolution")}
                ${this._renderStatusBarItem("technology")}
                ${this._renderStatusBarItem("engine")}
                ${this._renderStatusBarItem("upgrade")}
              </div>
            `:""}
        ${this._renderOptionSetHeader("live")}
        ${"live"===this._expandedMenus[Pa]?o`
              <div class="values">
                ${this._renderDocLinkRow(ts)}
                ${this._renderSwitch(Ie,this._defaults.live.preload)}
                ${this._renderSwitch(Oe,this._defaults.live.draggable)}
                ${this._renderSwitch(Ce,this._defaults.live.zoomable)}
                ${this._renderSwitch(ze,this._defaults.live.lazy_load)}
                ${this._renderOptionSelector(Ae,this._mediaActionNegativeConditions,{multiple:!0})}
                ${this._renderOptionSelector(Ee,this._mediaActionPositiveConditions,{multiple:!0})}
                ${this._renderOptionSelector(Be,this._mediaActionNegativeConditions,{multiple:!0})}
                ${this._renderOptionSelector(Ne,this._mediaLiveMuteConditions,{multiple:!0})}
                ${this._renderOptionSelector(Te,this._mediaLiveUnmuteConditions,{multiple:!0})}
                ${this._renderOptionSelector(Re,this._transitionEffects)}
                ${this._renderSwitch(Le,this._defaults.live.show_image_during_load)}
                ${this._renderViewDisplay(Ca,De,He,Pe,Ve,Ke)}
                ${this._putInSubmenu(Sa,!0,"config.live.controls.editor_label","mdi:gamepad",o`
                    ${this._renderSwitch(Ue,this._defaults.live.controls.builtin,{label:r("config.common.controls.builtin")})}
                    ${this._renderSwitch(je,this._defaults.live.controls.wheel,{label:r("config.common.controls.wheel")})}
                    ${this._renderNextPreviousControls(xa,qe,Fe,{allowIcons:!0})}
                    ${this._renderThumbnailsControls(ka,Ge,Je,Qe,We,Xe,Ye,Ze,this._defaults.live.controls.thumbnails,{configPathMode:ei})}
                    ${this._renderMiniTimeline(Ia,Oa,ii,ti,ni,ai,si,oi,this._defaults.live.controls.timeline.show_recordings,this._defaults.live.controls.timeline.format["24h"],ri)}
                    ${this._putInSubmenu(Ma,!0,"config.live.controls.ptz.editor_label","mdi:pan",o`
                        ${this._renderOptionSelector(li,this._ptzModes)}
                        ${this._renderOptionSelector(ci,this._ptzTypes)}
                        ${this._renderOptionSelector(di,this._ptzPositions)}
                        ${this._renderOptionSelector(ui,this._ptzOrientations)}
                        ${this._renderSwitch(mi,this._defaults.live.controls.ptz.hide_pan_tilt,{label:r("config.live.controls.ptz.hide_pan_tilt")})}
                        ${this._renderSwitch(hi,this._defaults.live.controls.ptz.hide_pan_tilt,{label:r("config.live.controls.ptz.hide_zoom")})}
                        ${this._renderSwitch(_i,this._defaults.live.controls.ptz.hide_home,{label:r("config.live.controls.ptz.hide_home")})}
                        ${this._renderSwitch(gi,this._defaults.live.controls.ptz.hide_type,{label:r("config.live.controls.ptz.hide_type")})}
                      `)}
                  `)}
                ${this._putInSubmenu(za,!0,"config.live.microphone.editor_label","mdi:microphone",o`
                    ${this._renderNumberInput(bi)}
                    ${this._renderSwitch(pi,this._defaults.live.microphone.always_connected)}
                    ${this._renderNumberInput(vi)}
                  `)}
              </div>
            `:""}
        ${this._renderOptionSetHeader("folders")}
        ${"folders"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(ns)}
              ${t.map(((e,i)=>this._renderFolder(t,i)))}
              ${this._renderFolder(t,t.length,!0)}
            </div>`:""}
        ${this._renderOptionSetHeader("media_gallery")}
        ${"media_gallery"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(ss)}
              ${this._renderThumbnailsControls(Ea,fi,$i,yi,wi,Si,xi,Mi,this._defaults.media_gallery.controls.thumbnails)}
              ${this._renderFilterControls(Aa,ki)}
            </div>`:""}
        ${this._renderOptionSetHeader("media_viewer")}
        ${"media_viewer"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(as)}
              ${this._renderOptionSelector(Ii,this._mediaActionPositiveConditions,{multiple:!0})}
              ${this._renderOptionSelector(Oi,this._mediaActionNegativeConditions,{multiple:!0})}
              ${this._renderOptionSelector(Ci,this._mediaActionNegativeConditions,{multiple:!0})}
              ${this._renderOptionSelector(zi,this._mediaActionPositiveConditions,{multiple:!0})}
              ${this._renderSwitch(Ai,this._defaults.media_viewer.draggable)}
              ${this._renderSwitch(Ei,this._defaults.media_viewer.zoomable)}
              ${this._renderSwitch(Bi,this._defaults.media_viewer.lazy_load)}
              ${this._renderOptionSelector(Ni,this._transitionEffects)}
              ${this._renderSwitch(Ti,this._defaults.media_viewer.snapshot_click_plays_clip)}
              ${this._renderViewDisplay(Da,Ri,Li,Di,Hi,Pi)}
              ${this._putInSubmenu(Ba,!0,"config.media_viewer.controls.editor_label","mdi:gamepad",o`
                  ${this._renderSwitch(Vi,this._defaults.media_viewer.controls.builtin,{label:r("config.common.controls.builtin")})}
                  ${this._renderSwitch(Ki,this._defaults.media_viewer.controls.wheel,{label:r("config.common.controls.wheel")})}
                  ${this._renderNextPreviousControls(Na,Ui,ji,{allowThumbnails:!0})}
                  ${this._renderThumbnailsControls(Ta,qi,Fi,Gi,Ji,Qi,Wi,Xi,this._defaults.media_viewer.controls.thumbnails,{configPathMode:Yi})}
                  ${this._renderMiniTimeline(Ra,La,Zi,et,it,tt,nt,at,this._defaults.media_viewer.controls.timeline.show_recordings,this._defaults.media_viewer.controls.timeline.format["24h"],st)}
                `)}
            </div>`:""}
        ${this._renderOptionSetHeader("image")}
        ${"image"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(os)}
              ${this._renderImageOptions(ot,rt,lt,ct,dt)}
            </div>`:""}
        ${this._renderOptionSetHeader("timeline")}
        ${"timeline"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(rs)}
              ${this._renderTimelineCoreControls(qa,Q,W,X,Y,ut,this._defaults.timeline.show_recordings,this._defaults.timeline.format["24h"])}
              ${this._renderThumbnailsControls(Fa,mt,ht,_t,gt,bt,pt,vt,this._defaults.timeline.controls.thumbnails,{configPathMode:ft})}
            </div>`:""}
        ${this._renderOptionSetHeader("dimensions")}
        ${"dimensions"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(Ya)}
              ${this._renderOptionSelector($t,this._aspectRatioModes)}
              ${this._renderStringInput(yt)}
              ${this._renderStringInput(wt)}
            </div>`:""}
        ${this._renderOptionSetHeader("performance","low"===b(this._config,Yn)?"warning":void 0)}
        ${"performance"===this._expandedMenus[Pa]?o` <div class="values">
              ${"low"===b(this._config,Yn)?this._renderInfo(r("config.performance.warning")):o``}
              ${this._putInSubmenu(Va,!0,"config.performance.features.editor_label","mdi:feature-search",o`
                  ${this._renderSwitch(St,this._defaults.performance.features.card_loading_indicator)}
                  ${this._renderSwitch(xt,this._defaults.performance.features.card_loading_effects)}
                  ${this._renderSwitch(Mt,this._defaults.performance.features.animated_progress_indicator)}
                  ${this._renderNumberInput(kt,{max:It})}
                  ${this._renderNumberInput(Ot,{min:1})}
                `)}
              ${this._putInSubmenu(Ka,!0,"config.performance.style.editor_label","mdi:palette-swatch-variant",o`
                  ${this._renderSwitch(Ct,this._defaults.performance.style.border_radius)}
                  ${this._renderSwitch(zt,this._defaults.performance.style.box_shadow)}
                `)}
            </div>`:""}
        ${this._renderOptionSetHeader("remote_control")}
        ${"remote_control"===this._expandedMenus[Pa]?o` <div class="values">
              ${this._renderDocLinkRow(ls)}
              ${this._putInSubmenu(Ua,!0,"config.remote_control.entities.editor_label","mdi:devices",o`
                  ${this._renderEntitySelector(At,"input_select")}
                `)}
            </div>`:""}
        ${void 0!==this._config.overrides?o` ${this._renderOptionSetHeader("overrides")}
            ${"overrides"===this._expandedMenus[Pa]?o` <div class="values">
                  ${this._renderInfo(r("config.overrides.info"))}
                </div>`:""}`:o``}
        <div class="action-buttons">
          ${this._configUpgradeable?o`<ha-button
                appearance="filled"
                variant="warning"
                title=${r("editor.upgrade_available")}
                aria-label=${r("editor.upgrade_available")}
                @click=${()=>{if(this._config){const e=d(this._config);Et(e),this._updateConfig(e)}}}
              >
                ${r("editor.upgrade")}
              </ha-button>`:""}
          <ha-button
            title=${r("editor.toggle_diagnostics")}
            aria-label=${r("editor.toggle_diagnostics")}
            @click=${()=>{Bt(this,"editor:diagnostics")}}
          >
            ${r("editor.toggle_diagnostics")}
          </ha-button>
        </div>
      </div>
    `}_closeMenu(e){delete this._expandedMenus[e],this.requestUpdate()}_openMenu(e,i){this._expandedMenus[e]=i,this.requestUpdate()}_toggleMenu(e){if(e&&e.target){const i=e.target.domain,t=e.target.key;this._expandedMenus[i]===t?this._closeMenu(i):this._openMenu(i,t)}}_valueChangedHandler(e,i){if(!this._config||!this.hass)return;let t;if(i.detail&&void 0!==i.detail.value&&(t=i.detail.value,"string"==typeof t&&(t=t.trim())),b(this._config,e)===t)return;const n=d(this._config);""===t||void 0===t?Nt(n,e):Tt(n,e,t),this._updateConfig(n)}static get styles(){return l('ha-icon-button {\n  color: var(--advanced-camera-card-button-color);\n  background-color: var(--advanced-camera-card-button-background);\n  border-radius: var(--advanced-camera-card-button-border-radius);\n  padding: 0px;\n  margin: 3px;\n  --ha-icon-display: block;\n  /* Buttons can always be clicked */\n  pointer-events: auto;\n}\n\n.option {\n  padding: 8px 4px;\n  cursor: pointer;\n}\n\n.option.option-overrides .title {\n  color: var(--warning-color);\n}\n\n.row {\n  display: flex;\n  margin-bottom: -14px;\n  pointer-events: none;\n}\n\n.title {\n  padding-left: 16px;\n  margin-top: -6px;\n  pointer-events: none;\n}\n\n.title.warning {\n  color: var(--warning-color);\n}\n\n.secondary {\n  padding-left: 40px;\n  color: var(--secondary-text-color);\n  pointer-events: none;\n}\n\n.values {\n  background: var(--secondary-background-color);\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n}\n\n.values + .option,\n.submenu + .option {\n  margin-top: 10px;\n}\n\n.action-buttons {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.submenu-header {\n  display: flex;\n  padding: 10px;\n  cursor: pointer;\n}\n\n.submenu.selected > .submenu-header {\n  background-color: var(--primary-color);\n  color: var(--primary-text-color);\n}\n\n.submenu-header * {\n  flex-basis: auto;\n  pointer-events: none;\n}\n\n.submenu-header .new {\n  font-style: italic;\n}\n\n.submenu:not(.selected) > .submenu-header .new {\n  color: var(--secondary-text-color, "black");\n}\n\n.submenu-header advanced-camera-card-icon {\n  margin-right: 15px;\n}\n\n.submenu.selected {\n  border: 1px solid var(--primary-color);\n}\n\n.submenu {\n  width: calc(100% - 20px);\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n}\n\n.submenu:first-child,\n:not(.submenu) + .submenu {\n  margin-top: 10px;\n}\n\n.submenu .values .controls {\n  display: inline-block;\n  margin-left: auto;\n  margin-right: 0px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n\n.submenu .values .controls ha-icon-button {\n  --ha-icon-button-size: 32px;\n  --mdc-icon-size: calc(var(--ha-icon-button-size) / 2);\n}\n\nspan.info {\n  padding: 10px;\n}\n\nha-selector {\n  padding: 10px;\n  border: 1px solid var(--divider-color);\n}\n\nadvanced-camera-card-message::part(icon) {\n  color: var(--primary-color);\n}\n\n.doc-link-row {\n  display: flex;\n  align-items: center;\n  padding: 10px 10px 10px 14px;\n  border-bottom: 1px solid var(--divider-color);\n  text-decoration: none;\n  font-style: italic;\n  color: var(--secondary-text-color);\n  cursor: help;\n  transition: background-color 0.2s ease, color 0.2s ease;\n  opacity: 0.7;\n}\n\n.doc-link-row:hover {\n  background-color: var(--secondary-background-color);\n  color: var(--primary-color);\n  opacity: 1;\n}\n\n.doc-link-row ha-icon:first-child {\n  margin-right: 15px;\n}\n\n.doc-link-row div {\n  flex: 1;\n  padding-left: 0;\n  margin-top: 0;\n  pointer-events: none;\n}\n\nha-button {\n  margin: 10px;\n}')}};t([n({attribute:!1})],us.prototype,"hass",void 0),t([c()],us.prototype,"_config",void 0),t([c()],us.prototype,"_defaults",void 0),t([c()],us.prototype,"_expandedMenus",void 0),us=t([a("advanced-camera-card-editor")],us);export{us as AdvancedCameraCardEditor};
