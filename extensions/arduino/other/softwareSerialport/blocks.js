/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#00D7B0';
    const secondaryColour = '#00BE96';

    Blockly.Blocks.softwareSerial_begin = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOFTWARESERIAL_BEGIN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'input_value',
                        name: 'RX'
                    },
                    {
                        type: 'input_value',
                        name: 'TX'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'BAUD',
                        options: [
                            ['4800', '4800'],
                            ['9600', '9600'],
                            ['19200', '19200'],
                            ['38400', '38400'],
                            ['57600', '57600'],
                            ['115200', '115200']]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.softwareSerial_print = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SOFTWARESERIAL_PRINT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'NO'
                    },
                    {
                        type: 'input_value',
                        name: 'DATA'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EOL',
                        options: [
                            [Blockly.Msg.SOFTWARESERIAL_WARP, '0'],
                            [Blockly.Msg.SOFTWARESERIAL_NOWARP, '1']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
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
                    name: 'NO'
                }],
                colour: color,
                secondaryColour: secondaryColour,
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
                    name: 'NO'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
