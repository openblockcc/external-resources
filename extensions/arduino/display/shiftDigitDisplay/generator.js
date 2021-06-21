/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.shiftDigitDisplay_init = function (block) {
        const len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);
        const sclk = block.getFieldValue('SCLK');
        const rclk = block.getFieldValue('RCLK');
        const dio = block.getFieldValue('DIO');

        Blockly.Arduino.includes_.shiftDigitDisplay_init = `#include <ShiftDisplay.h>`;
        Blockly.Arduino.definitions_.shiftDigitDisplay_init = `ShiftDisplay shiftDigitDisplay(${rclk}, ${sclk}, ${dio}, COMMON_ANODE, ${len});`;

        return ``;
    };

    Blockly.Arduino.shiftDigitDisplay_displayNumber = function (block) {
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
        const decimal = Blockly.Arduino.valueToCode(block, 'DECIMAL', Blockly.Arduino.ORDER_ATOMIC);

        return `shiftDigitDisplay.set(${num}, ${decimal}, ALIGN_RIGHT);\n`;
    };

    Blockly.Arduino.shiftDigitDisplay_displayString = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);

        return `shiftDigitDisplay.set(${data}, ALIGN_RIGHT);\n`;
    };

    Blockly.Arduino.shiftDigitDisplay_show = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);

        return `shiftDigitDisplay.show(${time});\n`;
    };

    return Blockly;
}

exports = addGenerator;
