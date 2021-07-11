/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.max30102_init = function () {
        Blockly.Arduino.includes_.max30102_init = `#include <Wire.h>\n#include <MAX30105.h>\n#include <heartRate.h>`;
        Blockly.Arduino.definitions_.max30102_init = `MAX30105 max30102;\nlong max30102_irValue;\nfloat max30102_bpm;`;

        return `max30102.begin(Wire, I2C_SPEED_FAST);\nmax30102.setup();\n` +
            `max30102.setPulseAmplitudeRed(0x0A);\nmax30102.setPulseAmplitudeGreen(0);\n`;
    };

    Blockly.Arduino.max30102_getData = function () {
        return `max30102_irValue = max30102.getIR();\nmax30102_bpm = getBPM(max30102_irValue);\n`;
    };

    Blockly.Arduino.max30102_irValue = function () {
        return [`max30102_irValue`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.max30102_heartBeat = function () {
        return [`max30102_bpm`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.max30102_isTouched = function () {
        return [`max30102_irValue > 50000`, Blockly.Arduino.ORDER_ATOMIC];
    };

    return Blockly;
}

exports = addGenerator;
