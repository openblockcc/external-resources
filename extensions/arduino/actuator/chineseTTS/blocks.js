/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const colour = '#5A5AAD';
    const secondaryColour = '#484891';

    const digitalPins = Blockly.getMainWorkspace().getFlyout()
        .getFlyoutItems()
        .find(block => block.type === 'arduino_pin_setDigitalOutput')
        .getField('PIN')
        .getOptions();

    const sound = [
        ['1', '0'],
        ['2', '1'],
        ['3', '2'],
        ['4', '3'],
        ['5', '6'],
        ['6', '7']
    ];

    Blockly.Blocks.chineseTTS_init = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_INIT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'RX',
                        options: digitalPins
                    },
                    {
                        type: 'field_dropdown',
                        name: 'TX',
                        options: digitalPins
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.chineseTTS_say = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_SAY,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.chineseTTS_sayUntillFinish = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_SAYUNTILLFINISH,
                args0: [
                    {
                        type: 'input_value',
                        name: 'TEXT'
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.chineseTTS_playSound = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_PLAYSOUND,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: sound
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };
    Blockly.Blocks.chineseTTS_playSoundUntillFinish = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_PLAYSOUNDUNTILLFINISH,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: sound
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.chineseTTS_setVolume = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_SETVOLUME,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'VOLUME',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.chineseTTS_setSpeechRate = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_SETSPEECHRATE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'RATE',
                        options: [
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3']
                        ]
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.chineseTTS_setPowerOnPrompt = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.CHINESETTS_SETPOWERONPROMPT,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'NO',
                        options: sound.concat([[Blockly.Msg.CHINESETTS_STATE_OFF, '8']])
                    }
                ],
                colour: colour,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
