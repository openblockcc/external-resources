/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        ULTRASONIC_CATEGORY: 'Ultrasonic',
        ULTRASONIC_READ_DISTANCE: 'ultrasonic sensor pin TRIG %1 ECHO %2 read distance %3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        ULTRASONIC_CATEGORY: '超声波',
        ULTRASONIC_READ_DISTANCE: '超声波传感器引脚 TRIG %1 ECHO %2 读取距离 %3'
    });
    return Blockly;
}

exports = addMsg;
