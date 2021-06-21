/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: 'init nrf24l01 pin CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 send number %1 to id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 send string %1 to id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 send value %1 = %2 to id %3',
        NRF24L01_HASDATA: 'nrf24l01 received data?',
        NRF24L01_READDATA: 'nrf24l01 read data',
        NRF24L01_PARSENUMBER: 'nrf24l01 parse number',
        NRF24L01_PARSESTRING: 'nrf24l01 parse string',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 value %1 available?',
        NRF24L01_PARSEVALUE: 'nrf24l01 parse value %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        NRF24L01_CATEGORY: 'NRF24l01',
        NRF24L01_INIT: '初始化 nrf24l01 引脚 CE %1 CSN %2 id %3',
        NRF24L01_SENDNUMBER: 'nrf24l01 发送数字 %1 到 id %2',
        NRF24L01_SENDSTRING: 'nrf24l01 发送字符串 %1 到 id %2',
        NRF24L01_SENDVALUE: 'nrf24l01 发送数值 %1 = %2 到 id %3',
        NRF24L01_HASDATA: 'nrf24l01 接收到数据？',
        NRF24L01_READDATA: 'nrf24l01 读取数据',
        NRF24L01_PARSENUMBER: 'nrf24l01 解析数字',
        NRF24L01_PARSESTRING: 'nrf24l01 解析字符串',
        NRF24L01_VALUEAVAILABLE: 'nrf24l01 数值 %1 可用？',
        NRF24L01_PARSEVALUE: 'nrf24l01 解析数值 %1'
    });
    return Blockly;
}

exports = addMsg;
