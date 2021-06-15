/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: 'init channel %1 pin IN1 %2 IN2 %3 EN %4',
        L298N_RUN: 'channel %1 run %2 speed %3',
        L298N_FORWARD: 'foward',
        L298N_BACK: 'back',
        L298N_STOP: 'channel %1 stop'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        L298N_CATEGORY: 'L298N',
        L298N_INIT: '初始化通道 %1 引脚 IN1 %2 IN2 %3 EN %4',
        L298N_RUN: '通道 %1 向 %2 速度 %3',
        L298N_FORWARD: '前',
        L298N_BACK: '后',
        L298N_STOP: '通道 %1 停止'
    });
    return Blockly;
}

exports = addMsg;
