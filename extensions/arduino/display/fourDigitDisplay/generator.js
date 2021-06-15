/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.fourDigitDisplay_init = function (block) {
        const dio = block.getFieldValue('DIO');
        const clk = block.getFieldValue('CLK');

        Blockly.Arduino.includes_.fourDigitDisplay_init = `#include <TM1637.h>`;
        Blockly.Arduino.definitions_.fourDigitDisplay_init = `TM1637 fourDigitDisplay(${clk}, ${dio});`;

        return `fourDigitDisplay.init();\n`;
    };

    Blockly.Arduino.fourDigitDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitDisplay.set(${brt});\n`;
    };

    Blockly.Arduino.fourDigitDisplay_displayNumber = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitDisplay.displayNum(${data});\n`;
    };

    Blockly.Arduino.fourDigitDisplay_displayString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitDisplay.displayStr(${data});\n`;
    };

    Blockly.Arduino.fourDigitDisplay_display = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const pos = block.getFieldValue('POS');

        return `fourDigitDisplay.display(${pos}, ${data});\n`;
    };

    Blockly.Arduino.fourDigitDisplay_setPoint = function (block) {
        const sta = block.getFieldValue('STA');

        return `fourDigitDisplay.point(${sta});\n`;
    };

    Blockly.Arduino.fourDigitDisplay_clear = function () {
        return `fourDigitDisplay.clearDisplay();\n`;
    };

    return Blockly;
}

exports = addGenerator;
