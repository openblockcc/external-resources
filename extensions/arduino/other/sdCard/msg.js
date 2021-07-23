/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        SDCARD_CATEGORY: 'SD Card',
        SDCARD_INIT: 'init sd card pin CS %1',
        SDCARD_OPENFILE: 'sd card open file %1 mode %2',
        SDCARD_MODE_READ: 'read only',
        SDCARD_MODE_READWRITE: 'read & write',
        SDCARD_OPENFILE_TOOLTIP: 'If file not exists, it will be created automatically.',
        SDCARD_CLOSEFILE: 'sd card close file',
        SDCARD_PRINT: 'print %1 %2 to file',
        SDCARD_EOL_WARP: 'warp',
        SDCARD_EOL_NOWARP: 'no-warp',
        SDCARD_FILEDATAAVAILABLE: 'sd card file data available',
        SDCARD_READFILEDATA: 'sd card read file data',
        SDCARD_ISFILEEXISTS: 'sd card file %1 exists?',
        SDCARD_CREATEFILE: 'sd card create file %1',
        SDCARD_DELETEFILE: 'sd card delet file %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        SDCARD_CATEGORY: 'SD卡',
        SDCARD_INIT: '初始化sd卡引脚 CS %1',
        SDCARD_OPENFILE: 'sd卡打开文件 %1 模式 %2',
        SDCARD_MODE_READ: '只读',
        SDCARD_MODE_READWRITE: '读写',
        SDCARD_OPENFILE_TOOLTIP: '如果文件不存在，它将被自动创建。',
        SDCARD_CLOSEFILE: 'sd卡关闭文件',
        SDCARD_PRINT: '打印 %1 %2 到文件',
        SDCARD_EOL_WARP: '换行',
        SDCARD_EOL_NOWARP: '不换行',
        SDCARD_FILEDATAAVAILABLE: 'sd卡文件可读取字节数',
        SDCARD_READFILEDATA: 'sd卡读取文件数据',
        SDCARD_ISFILEEXISTS: 'sd卡文件 %1 存在？',
        SDCARD_CREATEFILE: 'sd卡创建文件 %1',
        SDCARD_DELETEFILE: 'sd卡删除文件 %1'
    });
    return Blockly;
}

exports = addMsg;
