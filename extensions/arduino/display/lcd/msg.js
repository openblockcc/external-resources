/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LCD_CATEGORY: '1602 LCD',
        LCD_INIT: 'init lcd I2C address %1',
        LCD_SETCURSORPOSITION: 'set lcd cursor position x: %1 y: %2',
        LCD_PRINT: 'lcd print %1',
        LCD_CLEAR: 'clear lcd',
        LCD_SETBACKLIGHT: 'set lcd back light %1',
        LCD_SATE_ON: 'on',
        LCD_SATE_OFF: 'off',
        LCD_SETCURSORSTYLE: 'set lcd cursor %1 style %2',
        LCD_SATE_DISPLAY: 'display',
        LCD_SATE_HIDE: 'hide',
        LCD_STYLE_BLINK: 'blink',
        LCD_STYLE_NOBLINK: 'no-blink'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LCD_CATEGORY: '1602 LCD',
        LCD_INIT: '初始化 lcd I2C 地址 %1',
        LCD_SETCURSORPOSITION: 'set lcd 光标位置 x: %1 y: %2',
        LCD_PRINT: 'lcd 打印 %1',
        LCD_CLEAR: '清空 lcd',
        LCD_SETBACKLIGHT: '设置 lcd 背光 %1',
        LCD_SATE_ON: '开',
        LCD_SATE_OFF: '关',
        LCD_SETCURSORSTYLE: '设置 lcd 光标 %1 样式 %2',
        LCD_SATE_DISPLAY: '显示',
        LCD_SATE_HIDE: '隐藏',
        LCD_STYLE_BLINK: '闪烁',
        LCD_STYLE_NOBLINK: '不闪烁'
    });
    return Blockly;
}

exports = addMsg;
