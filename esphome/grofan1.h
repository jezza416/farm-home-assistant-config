#include "esphome.h"
using namespace esphome;

class FanOutput : public Component, public FloatOutput {
  public:
    void write_state(float state) override {
      if (state < 0.3) {
        // OFF
        digitalWrite(18, LOW);
        digitalWrite(19, LOW);
        
      } else if (state < 0.6) {
        // low speed
        digitalWrite(18, HIGH);
        digitalWrite(19, LOW);
        
      } else {
        // high speed
        digitalWrite(18, HIGH);
        digitalWrite(19, HIGH);
      }  
    }
};
