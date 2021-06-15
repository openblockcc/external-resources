/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.oled_init = function (block) {
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const addr = block.getFieldValue('ADDR');

        Blockly.Arduino.includes_.oled_init = `#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>`;
        Blockly.Arduino.definitions_.oled_init = `Adafruit_SSD1306 oled(${w}, ${h}, &Wire);`;

        return `oled.begin(SSD1306_SWITCHCAPVCC, ${addr});\n`;
    };

    Blockly.Arduino.oled_drawLine = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.drawLine(${x0}, ${y0}, ${x1}, ${y1}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawRect = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.drawRect(${x}, ${y}, ${w}, ${h}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillRect = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.fillRect(${x}, ${y}, ${w}, ${h}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawCircle = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.drawCircle(${x}, ${y}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillCircle = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.fillCircle(${x}, ${y}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawRoundRect = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.drawRoundRect(${x}, ${y}, ${w}, ${h}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillRoundRect = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.fillRoundRect(${x}, ${y}, ${w}, ${h}, ${r}, ${colour});\n`;
    };

    Blockly.Arduino.oled_drawTriangle = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.drawTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2}, ${colour});\n`;
    };

    Blockly.Arduino.oled_fillTriangle = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);
        const colour = block.getFieldValue('COLOUR');

        return `oled.fillTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2}, ${colour});\n`;
    };

    Blockly.Arduino.oled_setText = function (block) {
        const size = block.getFieldValue('SIZE');
        const colour = block.getFieldValue('COLOUR');
        const bgColor = block.getFieldValue('BGCOLOR');

        return `oled.setTextSize(${size});\noled.setTextColor(${colour}, ${bgColor});\n`;
    };

    Blockly.Arduino.oled_setCursor = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `oled.setCursor(${x}, ${y});\n`;
    };

    Blockly.Arduino.oled_print = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const eol = block.getFieldValue('EOL');

        if (eol === 'warp') {
            return `oled.println(${data});\n`;
        }
        return `oled.print(${data});\n`;

    };

    Blockly.Arduino.oled_clear = function () {
        return `oled.clearDisplay();\n`;
    };

    Blockly.Arduino.oled_refresh = function () {
        return `oled.display();\n`;
    };

    Blockly.Arduino.oled_startScroll = function (block) {
        const type = block.getFieldValue('TYPE');
        const y0 = block.getFieldValue('Y0');
        const y1 = block.getFieldValue('Y1');

        if (type === '0') {
            return `oled.startscrollright(${y0}, ${y1});\n`;
        } else if (type === '1') {
            return `oled.startscrollleft(${y0}, ${y1});\n`;
        } else if (type === '2') {
            return `oled.startscrolldiagright(${y0}, ${y1});\n`;
        }
        return `oled.startscrolldiagleft(${y0}, ${y1});\n`;

    };

    Blockly.Arduino.oled_stopScroll = function () {
        return `oled.stopscroll();\n`;
    };

    return Blockly;
}

exports = addGenerator;
