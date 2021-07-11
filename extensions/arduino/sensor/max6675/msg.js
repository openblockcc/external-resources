/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: 'init max6675 pin DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 read temperature %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MAX6675_CATEGORY: 'MAX6675',
        MAX6675_INIT: '初始化 max6675 引脚 DO %1 CLK %2 CS %3',
        MAX6675_READTEMPERATURE: 'max6675 读取温度 %1'
    });
    return Blockly;
}

exports = addMsg;
