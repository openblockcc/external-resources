/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_SERVO_CATEGORY}" id="SERVO_CATEGORY" colour="#FF6F00" secondaryColour="#FF6F00">
    <block type="servo_write" id="servo_write">
        <value name="degree">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
