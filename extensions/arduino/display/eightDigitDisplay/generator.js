/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.eightDigitDisplay_init = function (block) {
        const din = block.getFieldValue('DIN');
        const cs = block.getFieldValue('CS');
        const clk = block.getFieldValue('CLK');

        Blockly.Arduino.includes_.eightDigitDisplay_init = `#include <DigitLedDisplay.h>`;
        Blockly.Arduino.definitions_.eightDigitDisplay_init = `DigitLedDisplay eightDigitDisplay(${din}, ${cs}, ${clk});`;

        return `eightDigitDisplay.setBright(10);\neightDigitDisplay.setDigitLimit(8);\n`;
    };

    Blockly.Arduino.eightDigitDisplay_displayNumber = function (block) {
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        const decimal = Blockly.Arduino.valueToCode(block, 'DECIMAL', Blockly.Arduino.ORDER_ATOMIC);

        return `eightDigitDisplay.printDigit(${num}, ${decimal});\n`;
    };

    Blockly.Arduino.eightDigitDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `eightDigitDisplay.setBright(${brt});\n`;
    };

    Blockly.Arduino.eightDigitDisplay_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.eightDigitDisplay_clear = function () {
        return `eightDigitDisplay.clear();\n`;
    };

    return Blockly;
}

exports = addGenerator;
