/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.fourDigitClockDisplay_init = function (block) {
        const dio = block.getFieldValue('DIO');
        const clk = block.getFieldValue('CLK');

        Blockly.Arduino.includes_.fourDigitClockDisplay_init = `#include <TM1637.h>`;
        Blockly.Arduino.definitions_.fourDigitClockDisplay_init = `TM1637 fourDigitClockDisplay(${clk}, ${dio});`;

        return `fourDigitClockDisplay.init();\nfourDigitClockDisplay.set(2);\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.set(${brt});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.fourDigitClockDisplay_displayNumber = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.displayNum(${data});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_displayString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `fourDigitClockDisplay.displayStr(${data});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_display = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const pos = block.getFieldValue('POS');

        return `fourDigitClockDisplay.display(${pos}, ${data});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_setPoint = function (block) {
        const sta = block.getFieldValue('STA');

        return `fourDigitClockDisplay.point(${sta});\n`;
    };

    Blockly.Arduino.fourDigitClockDisplay_clear = function () {
        return `fourDigitClockDisplay.clearDisplay();\n`;
    };

    return Blockly;
}

exports = addGenerator;
