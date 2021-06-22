/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        IRREMOTERECEIVER_CATEGORY: 'IR Remote Receiver',
        IRREMOTERECEIVER_INIT: 'init IR remote receiver pin %1',
        IRREMOTERECEIVER_DATAAVAILABLE: 'IR remote receiver data available?',
        IRREMOTERECEIVER_RECIVEDCOMMAND: 'IR remote recived command',
        IRREMOTERECEIVER_RESUME: 'IR remote resume recive'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        IRREMOTERECEIVER_CATEGORY: '红外遥控接收器',
        IRREMOTERECEIVER_INIT: '初始化 红外遥控接收器引脚 %1',
        IRREMOTERECEIVER_DATAAVAILABLE: '红外遥控接收器数据可用？',
        IRREMOTERECEIVER_RECIVEDCOMMAND: '红外遥控接收器收到的指令',
        IRREMOTERECEIVER_RESUME: '红外遥控接收器继续接收'
    });
    return Blockly;
}

exports = addMsg;
