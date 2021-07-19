/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PCA9685_CATEGORY}" id="PCA9685_CATEGORY" colour="#9F4D95" secondaryColour="#8F4586">
    <block type="pca9685_init" id="pca9685_init">
        <value name="ADDR">
            <shadow type="pca9685_addressNumber">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>
    <block type="pca9685_setToServoMode" id="pca9685_setToServoMode"></block>
    <block type="pca9685_setServoAngle" id="pca9685_setServoAngle">
        <value name="ANGLE">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="pca9685_setAllServoAngle" id="pca9685_setAllServoAngle">
        <value name="ANGLE">
            <shadow type="math_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <sep gap="36"/>
    <block type="pca9685_setPWMFrequency" id="pca9685_setPWMFrequency">
        <value name="FREQ">
            <shadow type="pca9685_setPWMFrequencyNumber">
                <field name="NUM">200</field>
            </shadow>
        </value>
    </block>
    <block type="pca9685_setChannelPWM" id="pca9685_setChannelPWM">
        <value name="VALUE">
            <shadow type="pca9685_setPWMValueNumber">
                <field name="NUM">4096</field>
            </shadow>
        </value>
    </block>
    <block type="pca9685_setAllChannelPWM" id="pca9685_setAllChannelPWM">
        <value name="VALUE">
            <shadow type="pca9685_setPWMValueNumber">
                <field name="NUM">4096</field>
            </shadow>
        </value>
    </block>
</category>`;
}

exports = addToolbox;
