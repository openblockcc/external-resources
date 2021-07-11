/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_MAX30102_CATEGORY}" id="MAX30102_CATEGORY" colour="#5B00AE" secondaryColour="#6F00D2">
    <block type="max30102_init" id="max30102_init"></block>
    <block type="max30102_getData" id="max30102_getData"></block>
    <block type="max30102_irValue" id="max30102_irValue"></block>
    <block type="max30102_heartBeat" id="max30102_heartBeat"></block>
    <block type="max30102_isTouched" id="max30102_isTouched"></block>
</category>`;
}

exports = addToolbox;
