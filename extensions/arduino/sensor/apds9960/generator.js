/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.apds9960_init = function () {
        Blockly.Arduino.includes_.apds9960_init = `#include <Arduino_APDS9960.h>`;

        return 'APDS.begin();\n';
    };

    Blockly.Arduino.apds9960_isGestureAvailable = function () {
        return [`APDS.gestureAvailable()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.apds9960_readGesture = function () {
        Blockly.Arduino.definitions_.apds9960_readGesture = `int8_t gesture;`;

        return `gesture = APDS.readGesture();\n`;
    };

    Blockly.Arduino.apds9960_isGesture = function (block) {
        const gesture = block.getFieldValue('GESTURE');

        return [`gesture == ${gesture}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.apds9960_isProximityAvailable = function () {
        return [`APDS.proximityAvailable()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.apds9960_readProximity = function () {
        return [`APDS.readProximity()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
