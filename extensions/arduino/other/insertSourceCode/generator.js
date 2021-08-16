/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {

    const getSourceString = function (block) {
        let code = Blockly.Arduino.valueToCode(block, 'CODE', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1)
            .replace(/\\\\/g, '\\')
            .replace(/\\'/g, '\'');
        const escape = block.getFieldValue('ESCAPE');
        if (escape === '0') {
            code = code.replace(/\\n/g, '\n');
        }

        return code;
    };

    Blockly.Arduino.insertSourceCode_commandBlock = function (block) {
        const code = `${getSourceString(block)}\n`;

        return code;
    };

    Blockly.Arduino.insertSourceCode_roundBlock = function (block) {
        const code = getSourceString(block);

        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.insertSourceCode_booleanBlock = Blockly.Arduino.insertSourceCode_roundBlock;

    Blockly.Arduino.insertSourceCode_insertInIncludeArea = function (block) {
        const code = getSourceString(block);

        Blockly.Arduino.includes_[`insertSourceCode_insertInDefine_${code}`] = code;

        return ``;
    };

    Blockly.Arduino.insertSourceCode_insertInDefineArea = function (block) {
        const code = getSourceString(block);

        Blockly.Arduino.definitions_[`insertSourceCode_insertInDefine_${code}`] = code;

        return ``;
    };

    return Blockly;
}

exports = addGenerator;
