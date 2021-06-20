/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        COOPERATIVESCHEDULER_CATEGORY: 'Cooperative scheduler',
        COOPERATIVESCHEDULER_START: 'start cooperative scheduler',
        COOPERATIVESCHEDULER_SETUP: 'task %1 setup',
        COOPERATIVESCHEDULER_SLEEP: 'task delay %1 ms'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        COOPERATIVESCHEDULER_CATEGORY: '多任务调度器',
        COOPERATIVESCHEDULER_START: '启动多任务调度器',
        COOPERATIVESCHEDULER_SETUP: '任务 %1 setup',
        COOPERATIVESCHEDULER_SLEEP: '任务延时 %1 ms'
    });
    return Blockly;
}

exports = addMsg;
