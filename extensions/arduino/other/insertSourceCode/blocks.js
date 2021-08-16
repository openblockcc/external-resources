/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#5B5B5B';
    const secondaryColour = '#3C3C3C';

    Blockly.Blocks.insertSourceCode_commandBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INSERTSOURCECODE_COMMANDBLOCK,
                args0: [{
                    type: 'input_value',
                    name: 'CODE'
                },
                {
                    type: 'field_dropdown',
                    name: 'ESCAPE',
                    options: [
                        [Blockly.Msg.INSERTSOURCECODE_ESCAPE, '0'],
                        [Blockly.Msg.INSERTSOURCECODE_DONTESCAPE, '1']]
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    Blockly.Blocks.insertSourceCode_roundBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INSERTSOURCECODE_ROUNDBLOCK,
                args0: [{
                    type: 'input_value',
                    name: 'CODE'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_string']
            });
        }
    };

    Blockly.Blocks.insertSourceCode_booleanBlock = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INSERTSOURCECODE_BOOLEANBLOCK,
                args0: [{
                    type: 'input_value',
                    name: 'CODE'
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['output_boolean']
            });
        }
    };

    Blockly.Blocks.insertSourceCode_insertInIncludeArea = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INSERTSOURCECODE_INSERTININCLUDEAREA,
                args0: [{
                    type: 'input_value',
                    name: 'CODE'
                },
                {
                    type: 'field_dropdown',
                    name: 'ESCAPE',
                    options: [
                        [Blockly.Msg.INSERTSOURCECODE_ESCAPE, '0'],
                        [Blockly.Msg.INSERTSOURCECODE_DONTESCAPE, '1']]
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };


    Blockly.Blocks.insertSourceCode_insertInDefineArea = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.INSERTSOURCECODE_INSERTINDEFINEAREA,
                args0: [{
                    type: 'input_value',
                    name: 'CODE'
                },
                {
                    type: 'field_dropdown',
                    name: 'ESCAPE',
                    options: [
                        [Blockly.Msg.INSERTSOURCECODE_ESCAPE, '0'],
                        [Blockly.Msg.INSERTSOURCECODE_DONTESCAPE, '1']]
                }],
                colour: color,
                secondaryColour: secondaryColour,
                extensions: ['shape_statement']
            });
        }
    };

    return Blockly;
}

exports = addBlocks;
