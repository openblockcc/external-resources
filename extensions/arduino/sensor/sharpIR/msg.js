/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SHARPIR_CATEGORY: 'Sharp IR',
        SHARPIR_INIT: 'init sharp IR sensor %1 pin %2 model %3',
        SHARPIR_READDISTANCE: 'sharp IR sensor %1 read distance'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SHARPIR_CATEGORY: '夏普红外',
        SHARPIR_INIT: '初始化夏普红外传感器 %1 引脚 %2 型号 %3',
        SHARPIR_READDISTANCE: '夏普红外传感器 %1 读取距离'
    });
    return Blockly;
}

exports = addMsg;
