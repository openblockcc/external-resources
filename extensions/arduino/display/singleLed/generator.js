/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.led_init = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const pin = Blockly.Arduino.valueToCode(block, 'pin', Blockly.Arduino.ORDER_ATOMIC);
        
        Blockly.Arduino.definitions_[`led_init_${no}`] = 
`void led_set_state_${no}(int state) {
    if(state == 1){
        digitalWrite(${pin}, HIGH);
    } else if(state == 0){
        digitalWrite(${pin}, LOW);
    }
}
`;
        // Blockly.Arduino.setups_[`led_init_${no}`] = `pinMode(${pin}, OUTPUT);`;
        return `pinMode(${pin}, OUTPUT);\n`;
    };

    Blockly.Arduino.led_read_state = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'no', Blockly.Arduino.ORDER_ATOMIC);
        const state = this.getFieldValue('state');
        return `led_set_state_${no}(${state});\n`;
    };

    return Blockly;
}

exports = addGenerator;
