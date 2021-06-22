/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_IRREMOTERECEIVER_CATEGORY}" id="IRREMOTERECEIVER_CATEGORY" colour="#BB5E00" secondaryColour="#9F5000">
    <block type="irRemoteReceiver_init" id="irRemoteReceiver_init">
        <field name="PIN">2</field>
    </block>
    <block type="irRemoteReceiver_dataAvailable" id="irRemoteReceiver_dataAvailable">
    </block>
    <block type="irRemoteReceiver_recivedCommand" id="irRemoteReceiver_recivedCommand">
    </block>
    <block type="irRemoteReceiver_resume" id="irRemoteReceiver_resume">
    </block>
</category>`;
}

exports = addToolbox;
