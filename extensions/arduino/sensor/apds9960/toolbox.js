/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_APDS9960_CATEGORY}" id="APDS9960_CATEGORY" colour="#F08080" secondaryColour="#CD5C5C">
    <block type="apds9960_init" id="apds9960_init">
    </block>
    <block type="apds9960_isGestureAvailable" id="apds9960_isGestureAvailable">
    </block>
    <block type="apds9960_readGesture" id="apds9960_readGesture">
    </block>
    <block type="apds9960_isGesture" id="apds9960_isGesture">
    </block>
    <block type="apds9960_isProximityAvailable" id="apds9960_isProximityAvailable">
    </block>
    <block type="apds9960_readProximity" id="apds9960_readProximity">
    </block>
</category>`;
}

exports = addToolbox;
