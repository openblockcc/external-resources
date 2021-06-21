/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SHIFTDIGITDISPLAY_CATEGORY: 'Shift Digit Display',
        SHIFTDIGITDISPLAY_INIT: 'init shift digit display length %1 pin SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: 'shift digit display display number %1 decimal %2',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: 'shift digit display display string %1',
        SHIFTDIGITDISPLAY_SHOW: 'shift digit display show for %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: 'This command will block the program, ' +
            'it is recommended to run for 1ms in each loop.'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SHIFTDIGITDISPLAY_CATEGORY: '移位数码管',
        SHIFTDIGITDISPLAY_INIT: '初始化移位数码管 长度 %1 引脚 SCLK %2 RCLK %3 DIO %4',
        SHIFTDIGITDISPLAY_DISPLAYNUMBER: '移位数码管显示数字 %1 保留小数点后 %2 位',
        SHIFTDIGITDISPLAY_DISPLAYSTRING: '移位数码管显示字符串 %1',
        SHIFTDIGITDISPLAY_SHOW: '移位数码管显示 %1 ms',
        SHIFTDIGITDISPLAY_REFRESH_TOOLTIP: '这条指令将会阻塞程序，推荐在每个循环中运行1ms。'
    });
    return Blockly;
}

exports = addMsg;
