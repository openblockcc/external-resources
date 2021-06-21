#ifndef QDPservo2_h
#define QDPservo2_h
#include <Arduino.h>
class QDPservo2 {
  public:
    QDPservo2(uint8_t pin);
    void goAngle(int angle);
  private:
    uint8_t _pin;

};

#endif
