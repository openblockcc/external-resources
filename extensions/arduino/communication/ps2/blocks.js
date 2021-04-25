/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF3399';

    Blockly.Blocks.ps2_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'din'
                    },
                    {
                        type: 'input_value',
                        name: 'dout'
                    },
                    {
                        type: 'input_value',
                        name: 'cs'
                    },
                    {
                        type: 'input_value',
                        name: 'clk'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps2_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2_READDATA,
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps2_getButton = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2_GETBUTTON,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'button',
                        options: [
                            [Blockly.Msg.PS2_UP, '16'],
                            [Blockly.Msg.PS2_DOWN, '64'],
                            [Blockly.Msg.PS2_LEFT, '128'],
                            [Blockly.Msg.PS2_RIGHT, '32'],
                            [Blockly.Msg.PS2_TRIANGLE, '4096'],
                            [Blockly.Msg.PS2_CIRCLE, '8192'],
                            [Blockly.Msg.PS2_CROSS, '16384'],
                            [Blockly.Msg.PS2_SQUARE, '32768'],
                            ['L1', '1024'],
                            ['L2', '256'],
                            ['L3', '2'],
                            ['R1', '2048'],
                            ['R2', '512'],
                            ['R3', '4'],
                            [Blockly.Msg.PS2_SELECT, '1'],
                            [Blockly.Msg.PS2_START, '8']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.ps2_GetJoystick = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2_GETJOYSTICK,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'joystick',
                        options: [
                            ['LX', '7'],
                            ['LY', '8'],
                            ['RX', '5'],
                            ['RY', '6']
                        ]
                    }
                ],
                colour: color,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
