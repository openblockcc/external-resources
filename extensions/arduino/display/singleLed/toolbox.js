/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_LED_CATEGORY}" id="LED_CATEGORY" colour="#CC3299" secondaryColour="#CC3299" iconURI="">
    <block type="led_init" id="led_init">
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
    <block type="led_read_state" id="led_read_state">
        <value name="no">
            <shadow type="math_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
