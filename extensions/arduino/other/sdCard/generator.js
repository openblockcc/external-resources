/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.sdCard_init = function (block) {
        const cs = block.getFieldValue('CS');

        Blockly.Arduino.includes_.sdCard_init = `#include <SPI.h>\n#include <SD.h>`;
        Blockly.Arduino.definitions_.sdCard_init = `File sdDataFile;`;
        return `SD.begin(${cs});\n`;
    };

    Blockly.Arduino.sdCard_openFile = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);
        const mode = block.getFieldValue('MODE');

        return `sdDataFile = SD.open(${name}, ${mode});\n`;
    };

    Blockly.Arduino.sdCard_closeFile = function () {
        return `sdDataFile.close();\n`;
    };

    Blockly.Arduino.sdCard_print = function (block) {
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const eol = block.getFieldValue('EOL');

        if (eol === 'warp') {
            return `sdDataFile.println(${data});\n`;
        }
        return `sdDataFile.print(${data});\n`;

    };

    Blockly.Arduino.sdCard_fileDataAvailable = function () {
        return [`sdDataFile.available()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sdCard_readFileData = function () {
        return [`sdDataFile.read()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sdCard_isFileExists = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);

        return [`SD.exists(${name})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.sdCard_createFile = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);

        return `sdDataFile = SD.open(${name}, FILE_WRITE);\nsdDataFile.close();\n`;
    };

    Blockly.Arduino.sdCard_deleteFile = function (block) {
        const name = Blockly.Arduino.valueToCode(block, 'NAME', Blockly.Arduino.ORDER_ATOMIC);

        return `SD.remove(${name});\n`;
    };

    return Blockly;
}

exports = addGenerator;
