#ifndef QDPBuzzer_H
#define QDPBuzzer_H

#include <stdint.h>

#include <Arduino.h>

class QDPBuzzer {
  public:
    void tone(uint8_t pin, uint16_t frequency, uint32_t duration);
    void noTone(uint8_t pin);
    void buzzer_music(uint8_t pin, uint8_t num);
};

#endif