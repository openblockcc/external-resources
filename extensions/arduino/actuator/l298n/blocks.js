/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';
    const secondaryColour = '#FF4F00';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const pwmPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setPwmOutput')
        .getField('PIN')
        .getOptions();

    Blockly.Blocks.l298n_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.L298N_INIT,
                args0: [
                    {
                        type: 'input_value',
                        name: 'CH'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN1',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'IN2',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'EN',
                        options: pwmPins
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
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
                        name: 'CH'
                    },
                    {
                        type: 'field_dropdown',
                        name: 'DIR',
                        options: [
                            [Blockly.Msg.L298N_FORWARD, 'L298N_FORWARD'],
                            [Blockly.Msg.L298N_BACK, 'L298N_BACKWARD']]
                    },
                    {
                        type: 'input_value',
                        name: 'SPEED'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
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
                        name: 'CH'
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
