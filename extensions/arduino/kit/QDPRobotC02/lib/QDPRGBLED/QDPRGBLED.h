#ifndef QDPRGBLED_h
#define QDPRGBLED_h
#include "Adafruit_NeoPixel.h"

#include <arduino.h>
class QDPRGBLED {
  public:
    void init(uint8_t port,uint16_t _LightNum);
    void clearRgbLED();
    void setRgbLEDColor(uint16_t index, uint8_t R, uint8_t G, uint8_t B);

  private:
    Adafruit_NeoPixel RGBLED;
    uint16_t LightNum;

};

#endif
