/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00D7B0';

    Blockly.Blocks.softwareSerial_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOFTWARESERIAL_BEGIN,
                args0: [{
                    type: 'input_value',
                    name: 'no'
                }, {
                    type: 'input_value',
                    name: 'rx'
                }, {
                    type: 'input_value',
                    name: 'tx'
                }, {
                    type: 'field_dropdown',
                    name: 'baudrate',
                    options: [
                        ['4800', '4800'],
                        ['9600', '9600'],
                        ['19200', '19200'],
                        ['38400', '38400'],
                        ['57600', '57600'],
                        ['115200', '115200']]
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.softwareSerial_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOFTWARESERIAL_PRINT,
                args0: [{
                    type: 'input_value',
                    name: 'no'
                }, {
                    type: 'input_value',
                    name: 'data'
                }],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.softwareSerial_available = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOFTWARESERIAL_AVAILABLE,
                args0: [{
                    type: 'input_value',
                    name: 'no'
                }],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.softwareSerial_readAByte = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOFTWARESERIAL_READABYTE,
                args0: [{
                    type: 'input_value',
                    name: 'no'
                }],
                colour: color,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
