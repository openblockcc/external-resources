/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        FOURDIGITDISPLAY_CATEGORY: '4-Digit Display',
        FOURDIGITDISPLAY_INIT: 'init 4-digit display pin DIO %1 CLK %2',
        FOURDIGITDISPLAY_SETBRIGHTNESS: 'set brightness %1',
        FOURDIGITDISPLAY_DISPLAYNUMBER: 'display number %1',
        FOURDIGITDISPLAY_DISPLAYSTRING: 'display string %1',
        FOURDIGITDISPLAY_DISPLAY: 'display %1 at bit %2',
        FOURDIGITDISPLAY_SETPOINT: 'set point %1',
        FOURDIGITDISPLAY_STATE_ON: 'on',
        FOURDIGITDISPLAY_STATE_OFF: 'off',
        FOURDIGITDISPLAY_SETPOINT_TOOLTIP: 'It will take effect after the next update of the display.',
        FOURDIGITDISPLAY_CLEAR: 'clear'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        FOURDIGITDISPLAY_CATEGORY: '4位数码管',
        FOURDIGITDISPLAY_INIT: '初始化4位数码管引脚 DIO %1 CLK %2',
        FOURDIGITDISPLAY_SETBRIGHTNESS: '设置亮度 %1',
        FOURDIGITDISPLAY_DISPLAYNUMBER: '显示数字 %1',
        FOURDIGITDISPLAY_DISPLAYSTRING: '显示字符 %1',
        FOURDIGITDISPLAY_DISPLAY: '显示 %1 第 %2 位',
        FOURDIGITDISPLAY_SETPOINT: '设置点 %1',
        FOURDIGITDISPLAY_STATE_ON: '开',
        FOURDIGITDISPLAY_STATE_OFF: '关',
        FOURDIGITDISPLAY_SETPOINT_TOOLTIP: '将在下次更新显示后生效.',
        FOURDIGITDISPLAY_CLEAR: '清空'
    });
    return Blockly;
}

exports = addMsg;
