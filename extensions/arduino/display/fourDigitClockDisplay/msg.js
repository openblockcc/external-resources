/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        FOURDIGITCLOCKDISPLAY_CATEGORY: '4-Digit Clock Display',
        FOURDIGITCLOCKDISPLAY_INIT: 'init 4-digit clock display pin DIO %1 CLK %2',
        FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS: 'set brightness %1',
        FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER: 'display number %1',
        FOURDIGITCLOCKDISPLAY_DISPLAYSTRING: 'display string %1',
        FOURDIGITCLOCKDISPLAY_DISPLAY: 'display %1 at bit %2',
        FOURDIGITCLOCKDISPLAY_SETPOINT: 'set point %1',
        FOURDIGITCLOCKDISPLAY_STATE_ON: 'on',
        FOURDIGITCLOCKDISPLAY_STATE_OFF: 'off',
        FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP: 'It will take effect after the next update of the display.',
        FOURDIGITCLOCKDISPLAY_CLEAR: 'clear'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        FOURDIGITCLOCKDISPLAY_CATEGORY: '4位时钟数码管',
        FOURDIGITCLOCKDISPLAY_INIT: '初始化4位时钟数码管引脚 DIO %1 CLK %2',
        FOURDIGITCLOCKDISPLAY_SETBRIGHTNESS: '设置亮度 %1',
        FOURDIGITCLOCKDISPLAY_DISPLAYNUMBER: '显示数字 %1',
        FOURDIGITCLOCKDISPLAY_DISPLAYSTRING: '显示字符 %1',
        FOURDIGITCLOCKDISPLAY_DISPLAY: '显示 %1 第 %2 位',
        FOURDIGITCLOCKDISPLAY_SETPOINT: '设置点 %1',
        FOURDIGITCLOCKDISPLAY_STATE_ON: '开',
        FOURDIGITCLOCKDISPLAY_STATE_OFF: '关',
        FOURDIGITCLOCKDISPLAY_SETPOINT_TOOLTIP: '将在下次更新显示后生效.',
        FOURDIGITCLOCKDISPLAY_CLEAR: '清空'
    });
    return Blockly;
}

exports = addMsg;
