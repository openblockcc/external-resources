/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_COOPERATIVESCHEDULER_CATEGORY}" id="COOPERATIVESCHEDULER_CATEGORY" colour="#A6D200" secondaryColour="#A6D200" >
    <block type="cooperativeScheduler_start" id="cooperativeScheduler_start">
    </block>
    <block type="cooperativeScheduler_setup" id="cooperativeScheduler_setup">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="cooperativeScheduler_sleep" id="cooperativeScheduler_sleep">
        <value name="time">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
