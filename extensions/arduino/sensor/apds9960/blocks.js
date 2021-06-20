/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#F08080';
    const secondaryColour = '#CD5C5C';

    Blockly.Blocks.apds9960_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.APDS9960_INIT,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.apds9960_isGestureAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.APDS9960_ISGESTUREAVAILABLE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.apds9960_readGesture = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.APDS9960_READGESTURE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.apds9960_isGesture = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.APDS9960_ISGESTURE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'GESTURE',
                        options: [
                            [Blockly.Msg.APDS9960_GESTURE_UP, 'GESTURE_UP'],
                            [Blockly.Msg.APDS9960_GESTURE_DOWN, 'GESTURE_DOWN'],
                            [Blockly.Msg.APDS9960_GESTURE_LEFT, 'GESTURE_LEFT'],
                            [Blockly.Msg.APDS9960_GESTURE_RIGHT, 'GESTURE_RIGHT']
                        ]
                    }
                ],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.apds9960_isProximityAvailable = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.APDS9960_ISPROXIMITYAVAILABLE,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.apds9960_readProximity = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.APDS9960_READPROXIMITY,
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_number']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
