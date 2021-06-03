/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#CC3299';
    // const ledIconUrl = 'data:image/svg+xml;base64,';

    Blockly.Blocks.led_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LED_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'no'
                    },
                    {
                        type: 'input_value',
                        name: 'pin'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.led_read_state = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.LED_READ_STATE,
                args0: [
                    {
                        type: 'input_value',
                        name: 'no'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'state',
                        options: [
                            ['on', '1'],
                            ['off', '0']
                        ]
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
