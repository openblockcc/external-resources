/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_L298N_CATEGORY}" id="L298N_CATEGORY" colour="#FF6F00" secondaryColour="#FF4F00">
    <block type="l298n_init" id="l298n_init">
        <value name="CH">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <field name="IN1">2</field>
        <field name="IN2">3</field>
        <field name="EN">5</field>
    </block>
    <block type="l298n_run" id="l298n_run">
        <value name="CH">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="SPEED">
            <shadow type="math_int9_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="l298n_stop" id="l298n_stop">
        <value name="CH">
            <shadow type="math_whole_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
