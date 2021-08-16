/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        INSERTSOURCECODE_CATEGORY: 'Insert Source Code',
        INSERTSOURCECODE_COMMANDBLOCK: 'insert source code %1 %2',
        INSERTSOURCECODE_ESCAPE: 'escape newline',
        INSERTSOURCECODE_DONTESCAPE: 'don\'t escape newline',
        INSERTSOURCECODE_ROUNDBLOCK: 'insert source code %1',
        INSERTSOURCECODE_BOOLEANBLOCK: 'insert source code %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: 'insert source code %1 in include area %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: 'insert source code %1 in define area %2'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        INSERTSOURCECODE_CATEGORY: '插入源代码',
        INSERTSOURCECODE_COMMANDBLOCK: '插入源代码 %1 %2',
        INSERTSOURCECODE_ESCAPE: '转译换行符',
        INSERTSOURCECODE_DONTESCAPE: '不转译换行符',
        INSERTSOURCECODE_ROUNDBLOCK: '插入源代码 %1',
        INSERTSOURCECODE_BOOLEANBLOCK: '插入源代码 %1',
        INSERTSOURCECODE_INSERTININCLUDEAREA: '在引用区插入源代码 %1 %2',
        INSERTSOURCECODE_INSERTINDEFINEAREA: '在定义区插入源代码 %1 %2'
    });
    return Blockly;
}

exports = addMsg;
