/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        RGBLEDSTRIP_CATEGORY: 'RGB LED Strip',
        RGBLEDSTRIP_INIT: 'init rgb led strip length %1 pin %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'rgb led set pixel %1 color %2',
        RGBLEDSTRIP_FILL: 'rgb led fill from pixel %1 count %2 with color %3',
        RGBLEDSTRIP_COLOR: 'rgb led strip color R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: 'set rgb led brightness %1',
        RGBLEDSTRIP_CLEAR: 'clear all rgb led',
        RGBLEDSTRIP_SHOW: 'refresh rgb led display'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        RGBLEDSTRIP_CATEGORY: 'RGB LED灯条',
        RGBLEDSTRIP_INIT: '初始化 rgb led 灯条长度 %1 引脚 %2',
        RGBLEDSTRIP_SETPIXELCOLOR: 'rgb led 设置像素 %1 颜色 %2',
        RGBLEDSTRIP_FILL: 'rgb led 从像素 %1 开始 共填充 %2 颜色 %3',
        RGBLEDSTRIP_COLOR: 'rgb led 灯条颜色 R %1 G %2 B %3',
        RGBLEDSTRIP_SETBRIGHTNESS: '设置 rgb led 亮度 %1',
        RGBLEDSTRIP_CLEAR: '清除所有 rgb led',
        RGBLEDSTRIP_SHOW: '刷新 rgb led 显示'
    });
    return Blockly;
}

exports = addMsg;
