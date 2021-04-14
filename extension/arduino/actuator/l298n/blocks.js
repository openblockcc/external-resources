/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';

    Blockly.Blocks.l298n_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.L298N_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ch'
                    },
                    {
                        type: 'input_value',
                        name: 'in1'
                    },
                    {
                        type: 'input_value',
                        name: 'in2'
                    },
                    {
                        type: 'input_value',
                        name: 'en'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.l298n_run = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.L298N_RUN,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ch'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'dir',
                        options: [
                            [Blockly.Msg.L298N_FORWARD, 'true'],
                            [Blockly.Msg.L298N_BACK, 'false']]
                    },
                    {
                        type: 'input_value',
                        name: 'speed'
                    }
                ],
                colour: color,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.l298n_stop = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.L298N_STOP,
                args0: [
                    {
                        type: 'input_value',
                        name: 'ch'
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
