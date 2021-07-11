
#include "QDPBuzzer.h"
#include <avr/wdt.h>
int  tone_list[] = {262, 294, 330, 349, 392, 440, 494, 523, 587, 659, 698, 784, 880, 988, 1046, 1175, 1318, 1397, 1568, 1760, 1967};
const int PROGMEM music_1[] = {12, 10, 12, 10, 12, 10, 9, 10, 12, 12, 12, 10, 13, 12, 10, 12, 10, 9, 8, 9, 10, 12, 10, 9, 8, 9, 10, 0};
const float PROGMEM rhythm_1[] = {1, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 1, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 2};
const int PROGMEM music_2[] = {8, 9, 10, 8, 8, 9, 10, 8, 10, 11, 12, 10, 11, 12, 0};
const float PROGMEM rhythm_2[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2};
const int PROGMEM music_3[] = {5, 8, 8, 10, 13, 10, 12, 12, 13, 12, 10, 11, 10, 9, 6, 9, 9, 11, 14, 14, 13, 12, 11, 11, 10, 6, 7, 8, 9, 0};
const float PROGMEM rhythm_3[] = {0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 1, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 1, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 0.5, 0.25, 1, 0.5, 0.25, 0.5, 1, 0.5, 3};
const int PROGMEM music_4[] = {5, 5, 6, 5, 8, 7, 5, 5, 6, 5, 9, 8, 5, 5, 12, 10, 8, 7, 6, 11, 11, 10, 8, 9, 8, 0};
const float PROGMEM rhythm_4[] = {0.5, 0.5, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 3};
const int PROGMEM music_5[] = {12, 13, 12, 13, 12, 13, 12, 12, 15, 14, 13, 12, 13, 12, 12, 12, 10, 10, 12, 12, 10, 9, 11, 10, 9, 8, 9, 8, 0};
const float PROGMEM rhythm_5[] = {0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1};
const int PROGMEM music_6[] = {8, 8, 10, 8, 8, 10, 22, 13, 13, 13, 12, 13, 12, 8, 10, 22, 15, 13, 13, 12, 13, 12, 8, 9, 22, 14, 14, 12, 10, 12, 0};
const float PROGMEM rhythm_6[] = {1, 1, 2, 0.5, 1, 1, 1, 1, 1, 0.5, 0.5, 1, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 2, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 4};
const int PROGMEM music_7[] = {6, 8, 9, 10, 12, 10, 8, 9, 6, 22, 8, 9, 10, 12, 12, 13, 9, 10, 22, 10, 12, 13, 12, 13, 15, 14, 13, 12, 13, 10, 8, 9, 10, 12, 8, 6, 8, 9, 10, 13, 12, 0};
const float PROGMEM rhythm_7[] = {0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 1, 2, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 1, 1, 2, 1, 0.5, 0.5, 2, 1, 0.5, 0.5, 0.25, 0.25, 0.5, 0.5, 1, 0.5, 0.5, 1, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 3};
const int PROGMEM music_8[] = {10, 8, 9, 6, 10, 9, 8, 9, 6, 10, 8, 9, 9, 12, 10, 7, 8, 8, 7, 6, 7, 8, 9, 5, 13, 12, 10, 10, 9, 8, 9, 10, 9, 10, 9, 12, 12, 12, 12, 12, 12, 0};
const float PROGMEM rhythm_8[] = {1, 1, 1, 1, 0.5, 0.5, 0.5, 0.5, 2, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 0.5, 0.5, 1, 1, 0.5, 0.5, 1, 1, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 1};
const int PROGMEM music_9[] = {10, 12, 15, 13, 12, 10, 12, 13, 15, 12, 15, 17, 16, 15, 16, 15, 13, 15, 12, 0};
const float PROGMEM rhythm_9[] = {0.5, 0.5, 0.5, 0.5, 2, 0.5, 0.5, 0.5, 0.5, 2, 1, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 2};
const int PROGMEM music_10[] = {10, 10, 10, 8, 5, 5, 22, 10, 10, 10, 8, 10, 22, 12, 12, 10, 8, 5, 5, 5, 6, 7, 8, 10, 9, 0};
const float PROGMEM rhythm_10[] = {0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 1, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5, 0.5, 0.5, 1};

void QDPBuzzer::tone(uint8_t pin, uint16_t frequency, uint32_t duration)
{

  int period = 1000000L / frequency;
  int pulse = period / 2;
  pinMode(pin, OUTPUT);
  for (long i = 0; i < duration * 1000L; i += period)
  {
    digitalWrite(pin, HIGH);
    delayMicroseconds(pulse);
    digitalWrite(pin, LOW);
    delayMicroseconds(pulse);
    wdt_reset();
  }
}

void QDPBuzzer::noTone(uint8_t pin)
{
  pinMode(pin, OUTPUT);
  digitalWrite(pin, LOW);
}

void QDPBuzzer::buzzer_music(uint8_t pin, uint8_t num)
{
  int *p1;
  float *p2  ;
  switch (num) {
    case 1:
      p1 = music_1;
      p2 = rhythm_1;
      break;
    case 2:
      p1 = music_2;
      p2 = rhythm_2;
      break;
    case 3:
      p1 = music_3;
      p2 = rhythm_3;
      break;
    case 4:
      p1 = music_4;
      p2 = rhythm_4;
      break;
    case 5:
      p1 = music_5;
      p2 = rhythm_5;
      break;
    case 6:
      p1 = music_6;
      p2 = rhythm_6;
      break;
    case 7:
      p1 = music_7;
      p2 = rhythm_7;
      break;
    case 8:
      p1 = music_8;
      p2 = rhythm_8;
      break;
    case 9:
      p1 = music_9;
      p2 = rhythm_9;
      break;
    case 10:
      p1 = music_10;
      p2 = rhythm_10;
      break;
  }



  for (int a = 0; pgm_read_word_near(&p1[a]) != 0; a++) {
    int time = int(pgm_read_float_near(&p2[a]) * 300);
    if (pgm_read_word_near(&p1[a]) != 22) {
      tone(pin, tone_list[pgm_read_word_near(&p1[a]) - 1], time);
    }
    else {
      noTone(pin);
      delay(time);
    }
    noTone(pin);
    delay(30);
  }
  delay(1000);

}
