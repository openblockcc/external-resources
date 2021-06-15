#include "L298N.h"

L298N::L298N(uint8_t pinEnable, uint8_t pinIN1, uint8_t pinIN2)
{
  _pinEnable = pinEnable;
  _pinIN1 = pinIN1;
  _pinIN2 = pinIN2;

  pinMode(_pinEnable, OUTPUT);
  pinMode(_pinIN1, OUTPUT);
  pinMode(_pinIN2, OUTPUT);
}

void L298N::run(int direction, int speed)
{
  if (speed <= 0)
  {
    speed = -speed;
    direction = -direction;
  }
  switch (direction)
  {
  case L298N_BACKWARD:
    digitalWrite(_pinIN1, LOW);
    digitalWrite(_pinIN2, HIGH);

    analogWrite(_pinEnable, speed);
    break;
  case L298N_FORWARD:
    digitalWrite(_pinIN1, HIGH);
    digitalWrite(_pinIN2, LOW);

    analogWrite(_pinEnable, speed);
    break;
  }
}

void L298N::stop()
{
  digitalWrite(_pinIN1, LOW);
  digitalWrite(_pinIN2, LOW);

  analogWrite(_pinEnable, 255);
}
