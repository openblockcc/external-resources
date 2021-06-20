/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        EIGHTDIGITDISPLAY_CATEGORY: '8-Digit Display',
        EIGHTDIGITDISPLAY_INIT: 'init 8-digit display pin DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: 'display number %1 decimal %2',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: 'set brightness %1',
        EIGHTDIGITDISPLAY_CLEAR: 'clear'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        EIGHTDIGITDISPLAY_CATEGORY: '8位数码管',
        EIGHTDIGITDISPLAY_INIT: '初始化 8位数码管引脚 DIN %1 CS %2 CLK %3',
        EIGHTDIGITDISPLAY_DISPLAYNUMBER: '显示数字 %1 保留小数点后 %2 位',
        EIGHTDIGITDISPLAY_SETBRIGHTNESS: '设置亮度 %1',
        EIGHTDIGITDISPLAY_CLEAR: '清空'
    });
    return Blockly;
}

exports = addMsg;
