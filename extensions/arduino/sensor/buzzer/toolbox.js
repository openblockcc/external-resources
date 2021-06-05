/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_BUZZER_CATEGORY}" id="BUZZER_CATEGORY" colour="#5959AB" secondaryColour="#5959AB" iconURI="">
    <block type="buzzer_init" id="buzzer_init">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM" max="5" min="50">1</field>
            </shadow>
        </value>
        <value name="pin">
            <shadow type="math_number">
                <field name="NUM" disabled="true">2</field>
            </shadow>
        </value>
    </block>
    <block type="buzzer_read_state" id="buzzer_read_state">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
