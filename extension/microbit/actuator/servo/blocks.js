/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#FF6F00';

    Blockly.Blocks.servo_write = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.SERVO_WRITE,
                args0: [
                    {
                        type: 'field_dropdown',
                        name: 'port',
                        options: [
                            ['0', '0'],
                            ['1', '1'],
                            ['2', '2'],
                            ['3', '3'],
                            ['4', '4'],
                            ['5', '5'],
                            ['6', '6'],
                            ['7', '7'],
                            ['8', '8'],
                            ['9', '9'],
                            ['10', '10'],
                            ['11', '11'],
                            ['12', '12'],
                            ['13', '13'],
                            ['14', '14'],
                            ['15', '15'],
                            ['16', '16']
                        ]
                    },
                    {
                        type: 'input_value',
                        name: 'degree'
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
