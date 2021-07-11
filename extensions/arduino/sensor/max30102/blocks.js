/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#5B00AE';
    const secondaryColour = '#6F00D2';

    Blockly.Blocks.max30102_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX30102_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.max30102_getData = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX30102_GETDATA,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.max30102_irValue = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX30102_IRVALUE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.max30102_heartBeat = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX30102_HEARTBEAT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    Blockly.Blocks.max30102_isTouched = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.MAX30102_ISTOUCHED,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
