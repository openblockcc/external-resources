/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.eitghtTimesEightMatirxDisplay_init = function (block) {
        const cs = block.getFieldValue('CS');

        Blockly.Arduino.includes_.eitghtTimesEightMatirxDisplay_init = `#include <SPI.h>\n#include <Adafruit_GFX.h>\n#include <Max72xxPanel.h>`;
        Blockly.Arduino.definitions_.eitghtTimesEightMatirxDisplay_init = `Max72xxPanel eitghtTimesEightMatrix = Max72xxPanel(${cs}, 1, 1);`;

        return ``;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_drawPixel = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawPixel(${x}, ${y}, ${colour});\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_drawLine = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawLine(${x0}, ${y0}, ${x1}, ${y1},${colour});\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_showChar = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawChar(0, 0, '${text}', ${colour}, !${colour}, 1);\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_showNumber = function (block) {
        const number = Blockly.Arduino.valueToCode(block, 'NUMBER', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.drawChar(0, 0, ${number} + '0', ${colour}, !${colour}, 1);\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_fill = function (block) {
        const colour = block.getFieldValue('COLOUR');

        return `eitghtTimesEightMatrix.fillScreen(${colour});\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_refresh = function () {
        return `eitghtTimesEightMatrix.write();\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_setBrightness = function (block) {
        const brt = Blockly.Arduino.valueToCode(block, 'BRT', Blockly.Arduino.ORDER_ATOMIC);

        return `eitghtTimesEightMatrix.setIntensity(${brt});\n`;
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_brightnessNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.eitghtTimesEightMatirxDisplay_setRotation = function (block) {
        const rotation = block.getFieldValue('ROTATION');

        return `eitghtTimesEightMatrix.setRotation(${rotation});\n`;
    };

    return Blockly;
}

exports = addGenerator;
