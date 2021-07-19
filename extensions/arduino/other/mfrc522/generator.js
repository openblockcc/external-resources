/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.mfrc522_init = function (block) {
        const sda = block.getFieldValue('SDA');
        const rst = block.getFieldValue('RST');

        Blockly.Arduino.includes_.mfrc522_init = `#include <SPI.h>\n#include <MFRC522.h>`;
        Blockly.Arduino.definitions_.mfrc522_init = `MFRC522 mfrc522(${sda}, ${rst});\nMFRC522::MIFARE_Key ` +
            `mfrc522_key{{0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF}};`;
        return `SPI.begin();\nmfrc522.PCD_Init();\n`;
    };

    Blockly.Arduino.mfrc522_isNewCardPresent = function () {
        return [`mfrc522.PICC_IsNewCardPresent()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_readCardSerial = function () {
        return [`mfrc522.PICC_ReadCardSerial()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_getCardTypeName = function () {
        return [`mfrc522.PICC_GetTypeName(mfrc522.PICC_GetType(mfrc522.uid.sak))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_getCardUid = function () {
        return [`((uint32_t)mfrc522.uid.uidByte[0] << 24 | (uint32_t)mfrc522.uid.uidByte[1] << 16 | ` +
            `(uint32_t)mfrc522.uid.uidByte[2] << 8 | (uint32_t)mfrc522.uid.uidByte[3])`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_numberToHexString = function (block) {
        const num = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_ATOMIC);

        return [`String(${num}, HEX)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_verificationKey = function (block) {
        const bl = Blockly.Arduino.valueToCode(block, 'BLOCK', Blockly.Arduino.ORDER_ATOMIC);

        return [`mfrc522.PCD_Authenticate(MFRC522::PICC_CMD_MF_AUTH_KEY_A, ${bl}, &mfrc522_key, ` +
            `&(mfrc522.uid)) == MFRC522::STATUS_OK`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_blockNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_readBlockData = function (block) {
        const bl = Blockly.Arduino.valueToCode(block, 'BLOCK', Blockly.Arduino.ORDER_ATOMIC);

        Blockly.Arduino.definitions_.mfrc522_readBlockData = `uint8_t mfrc522_rxBuffer[18];\n` +
            `uint8_t mfrc522_size = sizeof(mfrc522_rxBuffer);`;

        return [`mfrc522.MIFARE_Read(${bl}, mfrc522_rxBuffer, &mfrc522_size) == MFRC522::STATUS_OK`,
            Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_getBlockData = function (block) {
        const type = block.getFieldValue('TYPE');

        if (type === 'number') {
            return [`*(float*)mfrc522_rxBuffer`, Blockly.Arduino.ORDER_ATOMIC];
        }
        return [`(char*)mfrc522_rxBuffer`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_writeBlockData = function (block) {
        const bl = Blockly.Arduino.valueToCode(block, 'BLOCK', Blockly.Arduino.ORDER_ATOMIC);
        const data = Blockly.Arduino.valueToCode(block, 'DATA', Blockly.Arduino.ORDER_ATOMIC);
        const type = block.getFieldValue('TYPE');

        Blockly.Arduino.definitions_.mfrc522_writeBlockData = `uint8_t mfrc522_txBuffer[16];`;

        if (type === 'number') {
            return `*(float*)mfrc522_txBuffer = ${data.slice(1, -1)};\nmfrc522.MIFARE_Write(${bl}, mfrc522_txBuffer, 16);\n`;
        }
        return `strcpy(mfrc522_txBuffer, ${data});\nmfrc522.MIFARE_Write(${bl}, mfrc522_txBuffer, 16);\n`;
    };

    Blockly.Arduino.mfrc522_setKey = function (block) {
        const key = (0xffffffffffff - Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC)).toString(16);

        return `mfrc522_key = {0x${key.slice(0, 2)}, ` +
        `0x${key.slice(2, 4)}, 0x${key.slice(4, 6)}, 0x${key.slice(6, 8)}, 0x${key.slice(8, 10)}, 0x${key.slice(10, 12)}};\n`;
    };

    Blockly.Arduino.mfrc522_writeKeyToSector = function (block) {
        const key = (0xffffffffffff - Blockly.Arduino.valueToCode(block, 'KEY', Blockly.Arduino.ORDER_ATOMIC)).toString(16);
        const sector = Blockly.Arduino.valueToCode(block, 'SECTOR', Blockly.Arduino.ORDER_ATOMIC);

        const bl = (sector * 4) + 3;

        const tx = `uint8_t mfrc522_txKey[16] = {0x${key.slice(0, 2)}, 0x${key.slice(2, 4)}, 0x${key.slice(4, 6)}, ` +
            `0x${key.slice(6, 8)}, 0x${key.slice(8, 10)}, 0x${key.slice(10, 12)}, 0xff, 0x07, 0x80, 0x69, ` +
            `0x${key.slice(0, 2)}, 0x${key.slice(2, 4)}, 0x${key.slice(4, 6)}, 0x${key.slice(6, 8)}, 0x${key.slice(8, 10)}, ` +
            `0x${key.slice(10, 12)}};\n`;

        return `${tx}mfrc522.MIFARE_Write(${bl}, mfrc522_txKey, 16);\n`;
    };

    Blockly.Arduino.mfrc522_sectorNumber = function (block) {
        const num = block.getFieldValue('NUM');

        return [`${num}`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.mfrc522_printSectorData = function (block) {
        const sector = Blockly.Arduino.valueToCode(block, 'SECTOR', Blockly.Arduino.ORDER_ATOMIC);

        return `mfrc522.PICC_DumpMifareClassicSectorToSerial(&(mfrc522.uid), &mfrc522_key, ${sector});\n`;
    };

    Blockly.Arduino.mfrc522_halt = function () {
        return `mfrc522.PICC_HaltA();\nmfrc522.PCD_StopCrypto1();\n`;
    };

    return Blockly;
}

exports = addGenerator;
