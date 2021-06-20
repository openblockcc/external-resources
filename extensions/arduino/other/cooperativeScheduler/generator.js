/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator (Blockly) {
    Blockly.Arduino.cooperativeScheduler_start = function () {
        return 'mySCoop.start();\n';
    };

    Blockly.Arduino.cooperativeScheduler_setup = function (block) {
        const no = Blockly.Arduino.valueToCode(block, 'NO', Blockly.Arduino.ORDER_ATOMIC);
        let setupBranch = Blockly.Arduino.statementToCode(block, 'SUBSTACK');
        setupBranch = Blockly.Arduino.addLoopTrap(setupBranch, block.id);
        let loopBranch = Blockly.Arduino.statementToCode(block, 'SUBSTACK1');
        loopBranch = Blockly.Arduino.addLoopTrap(loopBranch, block.id);

        Blockly.Arduino.includes_.include_cooperativeScheduler_setup = `#include "SCoop.h"`;
        Blockly.Arduino.definitions_[`cooperativeScheduler_setup${no}`] =
`defineTask(Task${no});

void Task${no}::setup() {
${setupBranch}}

void Task${no}::loop() {
${loopBranch}}`;

        Blockly.Arduino.loops_.setups_cooperativeScheduler_start = 'yield();';
        return '';
    };

    Blockly.Arduino.cooperativeScheduler_sleep = function (block) {
        const time = Blockly.Arduino.valueToCode(block, 'TIME', Blockly.Arduino.ORDER_ATOMIC);
        return `sleep(${time});\n`;
    };

    return Blockly;
}

exports = addGenerator;
