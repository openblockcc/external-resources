/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.chineseTTS_init = function (block) {
        const tx = block.getFieldValue('TX');
        const rx = block.getFieldValue('RX');

        Blockly.Arduino.includes_.chineseTTS_init = `#include <Openblock_chineseTTS.h>`;
        Blockly.Arduino.definitions_.chineseTTS_init = `OB_ChineseTTS chineseTTSSerial(${rx}, ${tx});`;

        return `chineseTTSSerial.begin();\n`;
    };

    const toHexForm = buffer => Array.prototype.map.call(buffer, x => (`0x${x.toString(16).toUpperCase()}`)).join(', ');
    const toVariableName = buffer => Array.prototype.map.call(buffer, x => (`${x.toString(16).toUpperCase()}`)).join('_');

    Blockly.Arduino.chineseTTS_say = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const gbkCode = Blockly.iconv.encode(text, 'gbk');
        const gbkArray = toHexForm(gbkCode);
        const variableName = toVariableName(gbkCode);

        Blockly.Arduino.definitions_[`chineseTTSText_${variableName}`] = `const char chineseTTSText_${variableName}[] = {${gbkArray}, 0x00};`;

        return `chineseTTSSerial.say(chineseTTSText_${variableName});\n`;
    };

    Blockly.Arduino.chineseTTS_sayUntillFinish = function (block) {
        const text = Blockly.Arduino.valueToCode(block, 'TEXT', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const gbkCode = Blockly.iconv.encode(text, 'gbk');
        const gbkArray = toHexForm(gbkCode);
        const variableName = toVariableName(gbkCode);

        Blockly.Arduino.definitions_[`chineseTTSText_${variableName}`] = `const char chineseTTSText_${variableName}[] = {${gbkArray}, 0x00};`;

        return `chineseTTSSerial.sayUnitllFinish(chineseTTSText_${variableName});\n`;
    };

    Blockly.Arduino.chineseTTS_playSound = function (block) {
        const no = block.getFieldValue('NO');

        return `chineseTTSSerial.playSound(${no});\n`;
    };

    Blockly.Arduino.chineseTTS_playSoundUntillFinish = function (block) {
        const no = block.getFieldValue('NO');

        return `chineseTTSSerial.playSoundUnitllFinish(${no});\n`;
    };

    Blockly.Arduino.chineseTTS_setVolume = function (block) {
        const volume = block.getFieldValue('VOLUME');

        return `chineseTTSSerial.setVolume(${volume});\n`;
    };

    Blockly.Arduino.chineseTTS_setSpeechRate = function (block) {
        const rate = block.getFieldValue('RATE');

        return `chineseTTSSerial.setSpeechRate(${rate});\n`;
    };

    Blockly.Arduino.chineseTTS_setPowerOnPrompt = function (block) {
        const no = block.getFieldValue('NO');

        return `chineseTTSSerial.setPrompt(${no});\n`;
    };


    return Blockly;
}

exports = addGenerator;
