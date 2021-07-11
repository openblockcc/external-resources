/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: 'init dht %1 pin %2 model %3',
        DHT_READ_TEMPERATURE: 'dht %1 read temperature %2',
        DHT_READ_HUMIDITY: 'dht %1 read humidity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DHT_CATEGORY: 'DHT',
        DHT_INIT: '初始化 dht %1 引脚 %2 型号 %3',
        DHT_READ_TEMPERATURE: 'dht %1 读取温度 %2',
        DHT_READ_HUMIDITY: 'dht %1 读取湿度'
    });
    return Blockly;
}

exports = addMsg;
