#include "Buzzer.h"

#if defined(__AVR__)
#include <avr/wdt.h>
#endif

/**
 * Alternate Constructor which can call your own function to map the Buzzer to arduino port,
 * \param[in]
 *   switchPin - arduino port for buzzer detect pin.
 */
Buzzer::Buzzer(int pin)
{
  this->buzzer_pin = pin;
}

/**
 * \par Function
 *    setpin
 * \par Description
 *    Reset the buzzer available pin by its arduino port.
 * \param[in]
 *    pin - arduino port for buzzer detect pin.
 */
void Buzzer::setpin(int pin)
{
  this->buzzer_pin = pin;
}

/**
 * \par Function
 *    tone
 * \par Description
 *    Playing the tones.
 * \param[in]
 *    pin - Which pin on board that buzzer is connecting to.
 * \param[in]
 *    frequency - The speed of buzzer's tone play.
 * \param[in]
 *    duration - Time of a tone play.
 * \param[in]
 *    silentDuration - Silent time of a tone after play finished.
 * \par Others
 *    Frequency (in hertz) and duration (in milliseconds).
 */
void Buzzer::tone(int pin, uint16_t frequency, uint32_t duration, uint32_t silentDuration)
{
  this->buzzer_pin = pin;
  int period = 1000000L / frequency;
  int pulse = period / 2;
  pinMode(this->buzzer_pin, OUTPUT);
  for (long i = 0; i < duration * 1000L; i += period)
  {
    digitalWrite(this->buzzer_pin, HIGH);
    delayMicroseconds(pulse);
    digitalWrite(this->buzzer_pin, LOW);
    delayMicroseconds(pulse);
#if defined(__AVR__)
    wdt_reset();
#endif
  }
  delay(silentDuration);
}

/**
 * \par Function
 *    tone
 * \par Description
 *    Playing the tones.
 * \param[in]
 *    pin - Which pin on board that buzzer is connecting to.
 * \param[in]
 *    frequency - The speed of buzzer's tone play.
 * \param[in]
 *    duration - Time of a tone play.
 * \par Others
 *    Frequency (in hertz) and duration (in milliseconds).
 */
void Buzzer::tone(int pin, uint16_t frequency, uint32_t duration)
{
  tone(this->buzzer_pin, frequency, duration, 0);
}

/**
 * \par Function
 *    tone
 * \par Description
 *    Playing the tones.
 * \param[in]
 *    frequency - The speed of buzzer's tone play.
 * \param[in]
 *    duration - Time of a tone play.
 * \par Others
 *    Frequency (in hertz) and duration (in milliseconds).
 */
void Buzzer::tone(uint16_t frequency, uint32_t duration)
{
  tone(this->buzzer_pin, frequency, duration, 0);
}

/**
 * \par Function
 *    bendTones
 * \par Description
 *    Playing the tones A to tones B with setting step.
 * \param[in]
 *    frequency - The speed of buzzer's tone play.
 * \param[in]
 *    finalFrequency - The final speed of buzzer's tone play.
 * \param[in]
 *    step - The step of modify.
 * \param[in]
 *    duration - Time of a tone play.
 * \param[in]
 *    silentDuration - Silent time of a tone after play finished.
 * \par Others
 *    Frequency (in hertz) and duration (in milliseconds).
 */
void Buzzer::bendTones(uint16_t frequency, uint16_t finalFrequency, float step, uint32_t duration, uint32_t silentDuration)
{
  for (int i = frequency; i < finalFrequency;)
  {
    i = (frequency < finalFrequency) ? (i * step) : (i / step);
    tone(this->buzzer_pin, i, duration, silentDuration);
  }
}

/**
 * \par Function
 *    playMelody
 * \par Description
 *    Play customized melody.
 * \param[in]
 *    melodyName - Name of the customized melody.
 */
void Buzzer::playRingtone(uint16_t ringtone)
{
  switch (ringtone)
  {
  case R_connection:
    tone(this->buzzer_pin, note_E5, 50, 30);
    tone(this->buzzer_pin, note_E6, 55, 25);
    tone(this->buzzer_pin, note_A6, 60, 10);
    break;

  case R_disconnection:
    tone(this->buzzer_pin, note_E5, 50, 30);
    tone(this->buzzer_pin, note_A6, 55, 25);
    tone(this->buzzer_pin, note_E6, 50, 10);
    break;

  case R_buttonPushed:
    bendTones(note_E6, note_G6, 1.03, 20, 2);
    delay(30);
    bendTones(note_E6, note_D7, 1.04, 10, 2);
    break;

  case R_mode1:
    bendTones(note_E6, note_A6, 1.02, 30, 10); //1318.51 to 1760
    break;

  case R_mode2:
    bendTones(note_G6, note_D7, 1.03, 30, 10); //1567.98 to 2349.32
    break;

  case R_mode3:
    tone(this->buzzer_pin, note_E6, 50, 100); //D6
    tone(this->buzzer_pin, note_G6, 50, 80);  //E6
    tone(this->buzzer_pin, note_D7, 300, 0);  //G6
    break;

  case R_surprise:
    bendTones(800, 2150, 1.02, 10, 1);
    bendTones(2149, 800, 1.03, 7, 1);
    break;

  case R_OhOoh:
    bendTones(880, 2000, 1.04, 8, 3); //A5 = 880
    delay(200);
    for (int i = 880; i < 2000; i = i * 1.04)
    {
      tone(this->buzzer_pin, note_B5, 5, 10);
    }
    break;

  case R_OhOoh2:
    bendTones(1880, 3000, 1.03, 8, 3);
    delay(200);
    for (int i = 1880; i < 3000; i = i * 1.03)
    {
      tone(this->buzzer_pin, note_C6, 10, 10);
    }
    break;

  case R_cuddly:
    bendTones(700, 900, 1.03, 16, 4);
    bendTones(899, 650, 1.01, 18, 7);
    break;

  case R_sleeping:
    bendTones(100, 500, 1.04, 10, 10);
    delay(500);
    bendTones(400, 100, 1.04, 10, 1);
    break;

  case R_happy:
    bendTones(1500, 2500, 1.05, 20, 8);
    bendTones(2499, 1500, 1.05, 25, 8);
    break;

  case R_superHappy:
    bendTones(2000, 6000, 1.05, 8, 3);
    delay(50);
    bendTones(5999, 2000, 1.05, 13, 2);
    break;

  case R_happy_short:
    bendTones(1500, 2000, 1.05, 15, 8);
    delay(100);
    bendTones(1900, 2500, 1.05, 10, 8);
    break;

  case R_sad:
    bendTones(880, 669, 1.02, 20, 200);
    break;

  case R_confused:
    bendTones(1000, 1700, 1.03, 8, 2);
    bendTones(1699, 500, 1.04, 8, 3);
    bendTones(1000, 1700, 1.05, 9, 10);
    break;

  case R_fart1:
    bendTones(1600, 3000, 1.02, 2, 15);
    break;

  case R_fart2:
    bendTones(2000, 6000, 1.02, 2, 20);
    break;

  case R_fart3:
    bendTones(1600, 4000, 1.02, 2, 20);
    bendTones(4000, 3000, 1.02, 2, 20);
    break;
  }
}
