/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_IRON_KIT_CATEGORY}" id="IRON_KIT_CATEGORY" colour="#00D7B0" secondaryColour="#00D7B0">
    <block type="ironKit_init" id="ironKit_init">
    </block>
    <block type="ironKit_setMotorSpeed" id="ironKit_setMotorSpeed">
        <value name="speed">
            <shadow type="math_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="ironKit_stopMotor" id="ironKit_stopMotor">
    </block>
    <block type="ironKit_setServoDegree" id="ironKit_setServoDegree">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="ironKit_setRgbLedColor" id="ironKit_setRgbLedColor">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="ironKit_setBuzzer" id="ironKit_setBuzzer">
    </block>
    <sep gap="36"/>
    <block type="ironKit_ps2ReadData" id="ironKit_ps2ReadData">
    </block>
    <block type="ironKit_ps2GetButton" id="ironKit_ps2GetButton">
    </block>
    <block type="ironKit_ps2GetJoystick" id="ironKit_ps2GetJoystick">
    </block>
    <sep gap="36"/>
    <block type="ironKit_rgbUltrasonicInit" id="ironKit_rgbUltrasonicInit">
        <field name="ultraPin">A2</field>
        <field name="rgbPin">A3</field>
    </block>
    <block type="ironKit_rgbUltrasonicSetColorStyle" id="ironKit_rgbUltrasonicSetColorStyle">
        <value name="colour">
            <shadow type="colour_picker"/>
        </value>
    </block>
    <block type="ironKit_rgbUltrasonicReadDistance" id="ironKit_rgbUltrasonicReadDistance">
    </block>
</category>
`;
}

exports = addToolbox;
