

#ifndef QDPHCSR04Esp32_H
#define QDPHCSR04Esp32_H

#include "Arduino.h"

class UltraSonicDistanceSensor {
 public:
    /**
     * @param triggerPin  Digital pin that is used for controlling sensor (output).
     * @param echoPin  Digital pin that is used to get information from sensor (input).
     */
    UltraSonicDistanceSensor(uint8_t PIN1, uint8_t PIN2);

    /**
     * Measures distance by sending ultrasonic waves and measuring time it takes them
     * to return.
     * @returns Distance in centimeters, or negative value if distance is greater than 400cm.
     */
    double measureDistanceCm();
    double measureDistanceinch();
    long measureDistance();
 private:
    int triggerPin, echoPin;
};

#endif // HCSR04_H
