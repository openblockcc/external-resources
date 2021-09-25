/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    Blockly.Arduino.u8g2_12864LCD_init = function (block) {
        const rs = block.getFieldValue('RS');
        const rw = block.getFieldValue('R/W');
        const e = block.getFieldValue('E');

        Blockly.Arduino.includes_.u8g2_init = `#include <U8g2lib.h>`;
        Blockly.Arduino.definitions_.u8g2_12864LCD_init =
            `U8G2_ST7920_128X64_F_SW_SPI u8g2(U8G2_R0, ${e}, ${rw}, ${rs}, U8X8_PIN_NONE);`;

        return `u8g2.begin();\n`;
    };

    Blockly.Arduino.u8g2_12864Oled_init = function (block) {
        const scl = block.getFieldValue('SCL');
        const sda = block.getFieldValue('SDA');

        Blockly.Arduino.includes_.u8g2_init = `#include <U8g2lib.h>`;
        Blockly.Arduino.definitions_.u8g2_12864Oled_init =
            `U8G2_SSD1306_128X64_NONAME_F_SW_I2C u8g2(U8G2_R0, ${scl}, ${sda}, U8X8_PIN_NONE);`;

        return `u8g2.begin();\n`;
    };

    Blockly.Arduino.u8g2_12832Oled_init = function (block) {
        const scl = block.getFieldValue('SCL');
        const sda = block.getFieldValue('SDA');

        Blockly.Arduino.includes_.u8g2_init = `#include <U8g2lib.h>`;
        Blockly.Arduino.definitions_.u8g2_12864Oled_init =
            `U8G2_SSD1306_128X32_UNIVISION_F_SW_I2C u8g2(U8G2_R0, ${scl}, ${sda}, U8X8_PIN_NONE);`;

        return `u8g2.begin();\n`;
    };

    Blockly.Arduino.u8g2_setDrawColor = function (block) {
        const colour = block.getFieldValue('COLOR');

        return `u8g2.setDrawColor(${colour});\n`;
    };

    Blockly.Arduino.u8g2_drawPixel = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `u8g2.drawPixel(${x}, ${y});\n`;
    };

    Blockly.Arduino.u8g2_drawVHLine = function (block) {
        const style = block.getFieldValue('STYLE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const len = Blockly.Arduino.valueToCode(block, 'LEN', Blockly.Arduino.ORDER_ATOMIC);

        if (style === 'vertical') {
            return `u8g2.drawVLine(${x}, ${y}, ${len});\n`;
        }
        return `u8g2.drawHLine(${x}, ${y}, ${len});\n`;
    };

    Blockly.Arduino.u8g2_drawLine = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);

        return `u8g2.drawLine(${x0}, ${y0}, ${x1}, ${y1});\n`;
    };

    Blockly.Arduino.u8g2_drawRectangle = function (block) {
        const style = block.getFieldValue('STYLE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);

        if (style === 'no-filled') {
            return `u8g2.drawFrame(${x}, ${y}, ${w}, ${h});\n`;
        }
        return `u8g2.drawBox(${x}, ${y}, ${w}, ${h});\n`;
    };

    Blockly.Arduino.u8g2_drawRoundRectangle = function (block) {
        const style = block.getFieldValue('STYLE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);

        if (style === 'no-filled') {
            return `u8g2.drawRFrame(${x}, ${y}, ${w}, ${h}, ${r});\n`;
        }
        return `u8g2.drawRBox(${x}, ${y}, ${w}, ${h}, ${r});\n`;
    };

    Blockly.Arduino.u8g2_drawCircle = function (block) {
        const style = block.getFieldValue('STYLE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const r = Blockly.Arduino.valueToCode(block, 'R', Blockly.Arduino.ORDER_ATOMIC);
        const part = block.getFieldValue('PART');

        if (style === 'no-filled') {
            return `u8g2.drawCircle(${x}, ${y}, ${r}, ${part});\n`;
        }
        return `u8g2.drawDisc(${x}, ${y}, ${r}, ${part});\n`;
    };

    Blockly.Arduino.u8g2_drawEllipse = function (block) {
        const style = block.getFieldValue('STYLE');
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);
        const w = Blockly.Arduino.valueToCode(block, 'W', Blockly.Arduino.ORDER_ATOMIC);
        const h = Blockly.Arduino.valueToCode(block, 'H', Blockly.Arduino.ORDER_ATOMIC);
        const part = block.getFieldValue('PART');

        if (style === 'no-filled') {
            return `u8g2.drawEllipse(${x}, ${y}, ${w}, ${h}, ${part});\n`;
        }
        return `u8g2.drawFilledEllipse(${x}, ${y}, ${w}, ${h}, ${part});\n`;
    };

    Blockly.Arduino.u8g2_drawTriangle = function (block) {
        const x0 = Blockly.Arduino.valueToCode(block, 'X0', Blockly.Arduino.ORDER_ATOMIC);
        const y0 = Blockly.Arduino.valueToCode(block, 'Y0', Blockly.Arduino.ORDER_ATOMIC);
        const x1 = Blockly.Arduino.valueToCode(block, 'X1', Blockly.Arduino.ORDER_ATOMIC);
        const y1 = Blockly.Arduino.valueToCode(block, 'Y1', Blockly.Arduino.ORDER_ATOMIC);
        const x2 = Blockly.Arduino.valueToCode(block, 'X2', Blockly.Arduino.ORDER_ATOMIC);
        const y2 = Blockly.Arduino.valueToCode(block, 'Y2', Blockly.Arduino.ORDER_ATOMIC);

        return `u8g2.drawTriangle(${x0}, ${y0}, ${x1}, ${y1}, ${x2}, ${y2});\n`;
    };

    Blockly.Arduino.u8g2_setFont = function (block) {
        const font = block.getFieldValue('FONT');
        const dir = block.getFieldValue('DIR');

        if (font.indexOf('chinese') !== -1) {
            Blockly.Arduino.setups_.u8g2_setFont = `u8g2.enableUTF8Print();`;
        }

        return `u8g2.setFont(${font});\nu8g2.setFontDirection(${dir});\n`;
    };

    Blockly.Arduino.u8g2_drawString = function (block) {
        const str = Blockly.Arduino.valueToCode(block, 'STR', Blockly.Arduino.ORDER_ATOMIC);
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `u8g2.drawUTF8(${x}, ${y}, ${str});\n`;
    };

    Blockly.Arduino.u8g2_setCursor = function (block) {
        const x = Blockly.Arduino.valueToCode(block, 'X', Blockly.Arduino.ORDER_ATOMIC);
        const y = Blockly.Arduino.valueToCode(block, 'Y', Blockly.Arduino.ORDER_ATOMIC);

        return `u8g2.setCursor(${x}, ${y});\n`;
    };

    Blockly.Arduino.u8g2_print = function (block) {
        const str = Blockly.Arduino.valueToCode(block, 'STR', Blockly.Arduino.ORDER_ATOMIC);

        return `u8g2.print(${str});\n`;
    };

    Blockly.Arduino.u8g2_clear = function () {
        return `u8g2.clear();\n`;
    };

    Blockly.Arduino.u8g2_refresh = function () {
        return `u8g2.sendBuffer();\n`;
    };

    Blockly.Arduino.u8g2_setDisplayRotation = function (block) {
        const dir = block.getFieldValue('DIR');

        return `u8g2.setDisplayRotation(${dir});\n`;
    };

    return Blockly;
}

exports = addGenerator;
