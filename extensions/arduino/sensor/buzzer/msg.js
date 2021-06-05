/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        BUZZER_CATEGORY: 'BUZZER',
        BUZZER_INIT: 'init buzzer %1 pin %2',
        BUZZER_READ_STATE: 'set buzzer %1 state %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        BUZZER_CATEGORY: 'BUZZER',
        BUZZER_INIT: '初始化 buzzer %1 引脚 %2',
        BUZZER_READ_STATE: '设置 buzzer %1 状态 %2'
    });
    return Blockly;
}

exports = addMsg;
