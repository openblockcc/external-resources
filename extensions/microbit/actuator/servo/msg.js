/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SERVO_CATEGORY: 'Servo',
        SERVO_WRITE: 'set servo pin %1 out %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SERVO_CATEGORY: '舵机',
        SERVO_WRITE: '设置引脚 %1 舵机为 %2'
    });
    return Blockly;
}

exports = addMsg;
