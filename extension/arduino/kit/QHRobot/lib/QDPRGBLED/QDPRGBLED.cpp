#include "QDPRGBLED.h"
void QDPRGBLED::init(uint8_t port,uint16_t _LightNum)
{
  LightNum=_LightNum;
  RGBLED = Adafruit_NeoPixel(LightNum, port);
  RGBLED.setPin(port);
  RGBLED.begin();
  clearRgbLED();

}

void QDPRGBLED::clearRgbLED() {
  for (int i = 0; i < LightNum; i++) {
    RGBLED.setPixelColor(i, 0, 0, 0);
  }
  RGBLED.show();
  delay(1);
}
void QDPRGBLED::setRgbLEDColor(uint16_t index, uint8_t R, uint8_t G, uint8_t B) {
  if (index == 0) {
    for (uint8_t i = 0; i < LightNum; i++) {
      RGBLED.setPixelColor(i, R, G, B);
    }
  }
  else {
    RGBLED.setPixelColor(index-1, R, G, B);
  }
  RGBLED.show();
  delay(1);
}

