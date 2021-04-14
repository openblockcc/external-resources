#include "QDPJoystick.h"

void QDPJoystick::begin(int Enter_X, int Enter_Y) {
  Enter_X_PIN = Enter_X;
  Enter_Y_PIN = Enter_Y;
}

int QDPJoystick::Angle1() {
  int angle = 0;
  float abscissa = (map(analogRead(Enter_X_PIN), 1023, 0, (-512), 512));
  float ordinate = (map(analogRead(Enter_Y_PIN), 0, 1023, 512, (-512)));
  if (0 < abscissa && 0 < ordinate) {
    angle = asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  if (0 > abscissa && 0 < ordinate) {
    angle = 180 - asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  if (0 > abscissa && 0 > ordinate) {
    angle = 180 - asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  if (0 < abscissa && 0 > ordinate) {
    angle = 360 + asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  return angle;
}

int QDPJoystick::Angle2() {
  return sqrt(sq(map(analogRead(Enter_X_PIN), 1023, 0, (-512), 512)) + sq(map(analogRead(Enter_Y_PIN), 0, 1023, 512, (-512))));
}

int QDPJoystick::Angle1_32() {
  int angle = 0;
  float abscissa = (map(analogRead(Enter_X_PIN), 4096, 0, (-512), 512));
  float ordinate = (map(analogRead(Enter_Y_PIN), 4096, 0, (-512), 512));
  if (0 < abscissa && 0 < ordinate) {
    angle = asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  if (0 > abscissa && 0 < ordinate) {
    angle = 180 - asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  if (0 > abscissa && 0 > ordinate) {
    angle = 180 - asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  if (0 < abscissa && 0 > ordinate) {
    angle = 360 + asin(ordinate / sqrt(sq(abscissa) + sq(ordinate))) / 3.14159 * 180;
  }
  return angle;
}

int QDPJoystick::Angle2_32() {
  return sqrt(sq(map(analogRead(Enter_X_PIN), 4096, 0, (-512), 512)) + sq(map(analogRead(Enter_Y_PIN), 4096, 0, (-512), 512)));
}