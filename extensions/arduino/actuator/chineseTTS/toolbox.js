/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_CHINESETTS_CATEGORY}" id="CHINESETTS_CATEGORY" colour="#5A5AAD" secondaryColour="#484891">
    <block type="chineseTTS_init" id="chineseTTS_init">
        <field name="RX">2</field>
        <field name="TX">3</field>
    </block>
    <block type="chineseTTS_say" id="chineseTTS_say">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">你好</field>
            </shadow>
        </value>
    </block>
    <block type="chineseTTS_sayUntillFinish" id="chineseTTS_sayUntillFinish">
        <value name="TEXT">
            <shadow type="text">
                <field name="TEXT">你好</field>
            </shadow>
        </value>
    </block>
    <block type="chineseTTS_playSound" id="chineseTTS_playSound">
    </block>
    <block type="chineseTTS_playSoundUntillFinish" id="chineseTTS_playSoundUntillFinish">
    </block>
    <block type="chineseTTS_setVolume" id="chineseTTS_setVolume">
        <field name="VOLUME">4</field>
    </block>
    <block type="chineseTTS_setSpeechRate" id="chineseTTS_setSpeechRate">
        <field name="RATE">2</field>
    </block>
    <block type="chineseTTS_setPowerOnPrompt" id="chineseTTS_setPowerOnPrompt">
    </block>
</category>`;
}

exports = addToolbox;
