/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGBLEDSTRIP_CATEGORY: 'RGB LED Strip',
        RGBLEDSTRIP_INIT: 'init RGB LED strip length %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'set pixel %1 color %2',
        RGBLEDSTRIP_FILL: 'fill from pixel %1 count %2 with color %3',
        RGBLEDSTRIP_COLOR: 'RGB LED strip color R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'set brightness %1',
        RGBLEDSTRIP_CLEAR: 'clear all',
        RGBLEDSTRIP_SHOW: 'refresh'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGBLEDSTRIP_CATEGORY: 'RGB LED灯条',
        RGBLEDSTRIP_INIT: '初始化RGB LED灯条长度 %1 引脚 %2',
        RGBLEDSTRIP_SETPIXELCOLOR: '设置像素 %1 颜色 %2',
        RGBLEDSTRIP_FILL: '从像素 %1 开始 共填充 %2 颜色 %3',
        RGBLEDSTRIP_COLOR: 'RGB LED灯条颜色 R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: '设置亮度 %1',
        RGBLEDSTRIP_CLEAR: '清除所有',
        RGBLEDSTRIP_SHOW: '刷新'
    });
    return Blockly;
}

exports = addMsg;
