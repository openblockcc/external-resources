#ifndef Buzzer_H
#define Buzzer_H

#include <Arduino.h>
#include "Sounds.h"

/**
 * Class: Buzzer
 * \par Description
 * Declaration of Class Buzzer.
 */
class Buzzer{
public:
  Buzzer(int pin);
  void setpin(int pin);
  void tone(int pin, uint16_t frequency, uint32_t duration, uint32_t silentDuration);
  void tone(int pin, uint16_t frequency, uint32_t duration);
  void tone(uint16_t frequency, uint32_t duration = 0);
  void bendTones(uint16_t frequency, uint16_t finalFrequency, float step, uint32_t duration, uint32_t silentDuration);
  void playRingtone(uint16_t ringtone);
private:
  uint8_t buzzer_pin;
};
#endif
