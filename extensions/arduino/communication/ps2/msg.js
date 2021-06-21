/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PS2_CATEGORY: 'PS2',
        PS2_INIT: 'init ps2 receiver pin DIN %1 DOUT %2 CS %3 CLK %4',
        PS2_READDATA: 'read PS2 receiver data',
        PS2_GETBUTTON: 'PS2 %1 button is pressed?',
        PS2_UP: 'up',
        PS2_DOWN: 'down',
        PS2_LEFT: 'left',
        PS2_RIGHT: 'right',
        PS2_TRIANGLE: 'triangle',
        PS2_CIRCLE: 'circle',
        PS2_CROSS: 'cross',
        PS2_SQUARE: 'square',
        PS2_SELECT: 'select',
        PS2_START: 'start',
        PS2_GETJOYSTICK: 'PS2 get joystick %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PS2_CATEGORY: 'PS2',
        PS2_INIT: '初始化 ps2 接收器引脚 DIN %1 DOUT %2 CS %3 CLK %4',
        PS2_READDATA: '读取 PS2 接收器数据',
        PS2_GETBUTTON: 'PS2 %1 按键被按下?',
        PS2_UP: '上',
        PS2_DOWN: '下',
        PS2_LEFT: '左',
        PS2_RIGHT: '右',
        PS2_TRIANGLE: '三角',
        PS2_CIRCLE: '圆',
        PS2_CROSS: '叉号',
        PS2_SQUARE: '方块',
        PS2_SELECT: '选择',
        PS2_START: '开始',
        PS2_GETJOYSTICK: 'PS2获取摇杆 %1'
    });
    return Blockly;
}

exports = addMsg;
