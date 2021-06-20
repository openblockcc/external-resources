/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox () {
    return `
<category name="%{BKY_PASSIVEBUZZER_CATEGORY}" id="PASSIVEBUZZER_CATEGORY" colour="#B943FF" secondaryColour="#9900FF">
    <block type="passiveBuzzer_init" id="passiveBuzzer_init">
        <field name="PIN">2</field>
    </block>
    <block type="passiveBuzzer_playToneForBeat" id="passiveBuzzer_playToneForBeat">
        <field name="FREQ">note_C4</field>
    </block>
    <block type="passiveBuzzer_setTempo" id="passiveBuzzer_setTempo">
        <value name="BPM">
            <shadow type="math_whole_number">
                <field name="NUM">120</field>
            </shadow>
        </value>
    </block>
    <block type="passiveBuzzer_playRingtone" id="passiveBuzzer_playRingtone">
    </block>
</category>`;
}

exports = addToolbox;
