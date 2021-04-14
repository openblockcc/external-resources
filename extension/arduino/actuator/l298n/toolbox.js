/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_L298N_CATEGORY}" id="L298N_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00" iconURI="">
    <block type="l298n_init" id="l298n_init">
        <value name="ch">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="in1">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="in2">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="en">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
    </block>
    <block type="l298n_run" id="l298n_run">
        <value name="ch">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
    <block type="l298n_stop" id="l298n_stop">
        <value name="ch">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
