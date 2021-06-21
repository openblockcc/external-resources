/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF3399';
    const secondaryColour = '#C71585';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.ps2_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'DIN',
                        options: digitalPins

                    },
                    {
                        type: 'field_dropdown',
                        name: 'DOUT',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CS',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'CLK',
                        options: digitalPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.ps2_readData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.PS2_READDATA,
                colour: color,
                secondaryColour: secondaryColour,
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
                        name: 'BUTTON',
                        options: [
                            [Blockly.Msg.PS2_UP, 'PSB_PAD_UP'],
                            [Blockly.Msg.PS2_DOWN, 'PSB_PAD_DOWN'],
                            [Blockly.Msg.PS2_LEFT, 'PSB_PAD_LEFT'],
                            [Blockly.Msg.PS2_RIGHT, 'PSB_PAD_RIGHT'],
                            [Blockly.Msg.PS2_TRIANGLE, 'PSB_TRIANGLE'],
                            [Blockly.Msg.PS2_CIRCLE, 'PSB_CIRCLE'],
                            [Blockly.Msg.PS2_CROSS, 'PSB_CROSS'],
                            [Blockly.Msg.PS2_SQUARE, 'PSB_SQUARE'],
                            ['L1', 'PSB_L1'],
                            ['L2', 'PSB_L2'],
                            ['L3', 'PSB_L3'],
                            ['R1', 'PSB_R1'],
                            ['R2', 'PSB_R2'],
                            ['R3', 'PSB_R3'],
                            [Blockly.Msg.PS2_SELECT, 'PSB_SELECT'],
                            [Blockly.Msg.PS2_START, 'PSB_START']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
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
                        name: 'JOYSTICK',
                        options: [
                            ['LX', 'PSS_LX'],
                            ['LY', 'PSS_LY'],
                            ['RX', 'PSS_RX'],
                            ['RY', 'PSS_RY']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
