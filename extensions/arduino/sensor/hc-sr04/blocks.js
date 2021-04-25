/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks (Blockly) {
    const color = '#D39DDB';

    Blockly.Blocks.hc_sr04_read_distance = {
        init: function () {
            this.jsonInit({
                message0: Blockly.Msg.HC_SR04_READ_DISTANCE,
                args0: [{
                    type: 'input_value',
                    name: 'trig_pin'
                }, {
                    type: 'input_value',
                    name: 'echo_pin'
                }, {
                    type: 'field_dropdown',
                    name: 'unit',
                    options: [
                        ['cm', 'CM'],
                        ['inch', 'INC']]
                }],
                colour: color,
                extensions: ['output_number']
            });
        }
    };


    return Blockly;
}

exports = addBlocks;
