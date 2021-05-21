#ifndef TONE8266_H
#define TONE8266_H

#include <stdint.h>

#include <Arduino.h>

class Tone8266 {
  public:
    void buzzer_music(uint8_t pin, uint8_t num);
};

#endif