/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        LED_CATEGORY: 'LED',
        LED_INIT: 'init led %1 pin %2',
        LED_READ_STATE: 'set led %1 state %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        LED_CATEGORY: 'LED',
        LED_INIT: '初始化 led %1 引脚 %2',
        LED_READ_STATE: '设置 led %1 状态 %2'
    });
    return Blockly;
}

exports = addMsg;
