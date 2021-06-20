/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_COOPERATIVESCHEDULER_CATEGORY}" id="COOPERATIVESCHEDULER_CATEGORY" colour="#A6D200" secondaryColour="#8CB400" >
    <block type="cooperativeScheduler_start" id="cooperativeScheduler_start">
    </block>
    <block type="cooperativeScheduler_setup" id="cooperativeScheduler_setup">
        <value name="NO">
            <shadow type="math_whole_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
    <block type="cooperativeScheduler_sleep" id="cooperativeScheduler_sleep">
        <value name="TIME">
            <shadow type="math_positive_number">
                <field name="NUM">1000</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
