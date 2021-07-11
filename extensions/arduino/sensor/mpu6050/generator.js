/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.mpu6050_init = function (block) {
        const ar = block.getFieldValue('AR');
        const gr = block.getFieldValue('GR');
        const fb = block.getFieldValue('FB');

        Blockly.Arduino.includes_.mpu6050_init = `#include <Adafruit_MPU6050.h>\n#include <Adafruit_Sensor.h>\n#include <Wire.h>`;
        Blockly.Arduino.definitions_.mpu6050_init = `Adafruit_MPU6050 mpu6050;\nsensors_event_t mpu6050_a, mpu6050_g, mpu6050_temp;`;
        return `mpu6050.begin();\nmpu6050.setAccelerometerRange(${ar});\n` +
        `mpu6050.setGyroRange(${gr});\nmpu6050.setFilterBandwidth(${fb});\n`;
    };

    Blockly.Arduino.mpu6050_readData = function () {
        return `mpu6050.getEvent(&mpu6050_a, &mpu6050_g, &mpu6050_temp);\n`;
    };

    Blockly.Arduino.mpu6050_acceleration = function () {
        const axis = this.getFieldValue('AXIS');
        return [`mpu6050_a.acceleration.${axis}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mpu6050_gyro = function () {
        const axis = this.getFieldValue('AXIS');
        return [`mpu6050_g.gyro.${axis}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mpu6050_temperature = function () {
        return [`mpu6050_temp.temperature`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
