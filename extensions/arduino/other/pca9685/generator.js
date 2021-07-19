/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.pca9685_init = function (block) {
        const addr = Blockly.Arduino.valueToCode(block, 'ADDR', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.includes_.pca9685_init = `#include <PCA9685.h>`;
        Blockly.Arduino.definitions_.pca9685_init = `PCA9685 pca9685(${addr});`;
        return `Wire.begin();\npca9685.resetDevices();\npca9685.init();\n`;
    };

    Blockly.Arduino.pca9685_addressNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pca9685_setToServoMode = function () {
        Blockly.Arduino.definitions_.pca9685_setToServoMode = `PCA9685_ServoEval pca9685Servo(123, 491);`;

        return 'pca9685.setPWMFreqServo();\n';
    };

    Blockly.Arduino.pca9685_setServoAngle = function (block) {
        const ch = block.getFieldValue('CH');
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);

        return `pca9685.setChannelPWM(${ch}, pca9685Servo.pwmForAngle(${angle}));\n`;
    };

    Blockly.Arduino.pca9685_setAllServoAngle = function (block) {
        const angle = Blockly.Arduino.valueToCode(block, 'ANGLE', Blockly.Arduino.ORDER_ATOMIC);

        return `pca9685.setAllChannelsPWM(pca9685Servo.pwmForAngle(${angle}));\n`;
    };

    Blockly.Arduino.pca9685_setPWMFrequency = function (block) {
        const freq = Blockly.Arduino.valueToCode(block, 'FREQ', Blockly.Arduino.ORDER_ATOMIC);

        return `pca9685.setPWMFrequency(${freq});\n`;
    };

    Blockly.Arduino.pca9685_setPWMFrequencyNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.pca9685_setChannelPWM = function (block) {
        const ch = block.getFieldValue('CH');
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        return `pca9685.setChannelPWM(${ch}, ${value});\n`;
    };

    Blockly.Arduino.pca9685_setAllChannelPWM = function (block) {
        const value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_ATOMIC);

        return `pca9685.setAllChannelsPWM(${value});\n`;
    };

    Blockly.Arduino.pca9685_setPWMValueNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
