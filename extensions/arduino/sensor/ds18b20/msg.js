/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        DS18B20_CATEGORY: 'DS18B20',
        DS18B20_INIT: 'init ds18b20 pin %1 quantity %2',
        DS18B20_READALLTEMPERATURES: 'ds18b20 read all temperatures',
        DS18B20_GETTEMPERATURE: 'ds18b20 %1 temperatures %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        DS18B20_CATEGORY: 'DS18B20',
        DS18B20_INIT: '初始化 ds18b20 引脚 %1 数量 %2',
        DS18B20_READALLTEMPERATURES: 'ds18b20 读取所有温度',
        DS18B20_GETTEMPERATURE: 'ds18b20 %1 温度 %2'
    });
    return Blockly;
}

exports = addMsg;
