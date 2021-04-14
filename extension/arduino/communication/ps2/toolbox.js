/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PS2_CATEGORY}" id="PS2_CATEGORY" colour="#FF3399" secondaryColour="#FF3399">
    <block type="ps2_init" id="ps2_init">
        <value name="din">
            <shadow type="math_number">
                <field name="NUM">2</field>
            </shadow>
        </value>
        <value name="dout">
            <shadow type="math_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
        <value name="cs">
            <shadow type="math_number">
                <field name="NUM">4</field>
            </shadow>
        </value>
        <value name="clk">
            <shadow type="math_number">
                <field name="NUM">5</field>
            </shadow>
        </value>
    </block>
    <block type="ps2_readData" id="ps2_readData">
    </block>
    <block type="ps2_getButton" id="ps2_getButton">
    </block>
    <block type="ps2_GetJoystick" id="ps2_GetJoystick">
    </block>
</category>
`;
}

exports = addToolbox;
