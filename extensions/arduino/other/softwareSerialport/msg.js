/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SOFTWARESERIAL_CATEGORY: 'software serial',
        SOFTWARESERIAL_BEGIN: 'software serial %1 RX pin %2 TX pin %3 begin baudrate %4',
        SOFTWARESERIAL_PRINT: 'software serial %1 print %2',
        SOFTWARESERIAL_AVAILABLE: 'software serial %1 available data length',
        SOFTWARESERIAL_READABYTE: 'software serial %1 read a byte'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SOFTWARESERIAL_CATEGORY: '软件串口',
        SOFTWARESERIAL_BEGIN: '软件串口 %1 RX 引脚 %2 TX 引脚 %3 开启波特率 %4',
        SOFTWARESERIAL_PRINT: '软件串口  %1 打印 %2',
        SOFTWARESERIAL_AVAILABLE: '软件串口 %1 可用数据长度',
        SOFTWARESERIAL_READABYTE: '软件串口 %1 读取一个字节'
    });
    return Blockly;
}

exports = addMsg;
