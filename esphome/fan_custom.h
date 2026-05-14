#include "esphome.h"
using namespace esphome;

class FanOutput : public Component, public FloatOutput {
  public:
    void write_state(float state) override {
      if (state < 0.3) {
        // OFF
        digitalWrite(12, HIGH);
        digitalWrite(13, HIGH);
        digitalWrite(10, HIGH);
      } else if (state < 0.6) {
        // low speed
        digitalWrite(12, LOW);
        digitalWrite(13, HIGH);
        digitalWrite(10, HIGH);
      } else if (state < 0.9) {
        // medium speed
        digitalWrite(12, LOW);
        digitalWrite(13, LOW);
        digitalWrite(10, HIGH);
      } else {
        // high speed
        digitalWrite(12, LOW);
        digitalWrite(13, LOW);
        digitalWrite(10, LOW);
      }
    }
};