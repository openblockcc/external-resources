/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PASSIVEBUZZER_CATEGORY: 'Passive Buzzer',
        PASSIVEBUZZER_INIT: 'init passive buzzer pin %1',
        PASSIVEBUZZER_PLAYTONEFORBEAT: 'play tone %1 for %2 beat',
        PASSIVEBUZZER_SETTEMPO: 'set tempo to (bpm) %1',
        PASSIVEBUZZER_PLAYRINGTONE: 'play ringtone %1',
        PASSIVEBUZZER_CONNECTION: 'connection',
        PASSIVEBUZZER_DISCONNECTION: 'disconnet',
        PASSIVEBUZZER_DIDI: 'button pushed',
        PASSIVEBUZZER_MODE1: 'mode1',
        PASSIVEBUZZER_MODE2: 'mode2',
        PASSIVEBUZZER_MODE3: 'mode3',
        PASSIVEBUZZER_SURPRISE: 'surprise',
        PASSIVEBUZZER_OHOOH: 'OhOoh',
        PASSIVEBUZZER_OHOOH2: 'OhOoh2',
        PASSIVEBUZZER_CUDDLY: 'cuddly',
        PASSIVEBUZZER_SLEEPING: 'sleeping',
        PASSIVEBUZZER_HAPPY: 'happy',
        PASSIVEBUZZER_SUPERHAPPY: 'super happy',
        PASSIVEBUZZER_HAPPYSHORT: 'happy short',
        PASSIVEBUZZER_SAD: 'sad',
        PASSIVEBUZZER_CONFUSED: 'confused',
        PASSIVEBUZZER_FART1: 'fart1',
        PASSIVEBUZZER_FART2: 'fart2',
        PASSIVEBUZZER_FART3: 'fart3'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PASSIVEBUZZER_CATEGORY: '无源蜂鸣器',
        PASSIVEBUZZER_INIT: '初始化无源蜂鸣器引脚 %1',
        PASSIVEBUZZER_PLAYTONEFORBEAT: '播放音调 %1 持续 %2 节拍',
        PASSIVEBUZZER_SETTEMPO: '设置节奏为 (bpm) %1',
        PASSIVEBUZZER_PLAYRINGTONE: '播放铃声 %1',
        PASSIVEBUZZER_CONNECTION: '连接',
        PASSIVEBUZZER_DISCONNECTION: '断开',
        PASSIVEBUZZER_DIDI: '按键按下',
        PASSIVEBUZZER_MODE1: '模式1',
        PASSIVEBUZZER_MODE2: '模式2',
        PASSIVEBUZZER_MODE3: '模式3',
        PASSIVEBUZZER_SURPRISE: '惊讶',
        PASSIVEBUZZER_OHOOH: '哦哦',
        PASSIVEBUZZER_OHOOH2: '哦哦2',
        PASSIVEBUZZER_CUDDLY: '可爱',
        PASSIVEBUZZER_SLEEPING: '正在睡觉',
        PASSIVEBUZZER_HAPPY: '开心',
        PASSIVEBUZZER_SUPERHAPPY: '非常开心',
        PASSIVEBUZZER_HAPPYSHORT: '开心短',
        PASSIVEBUZZER_SAD: '难过',
        PASSIVEBUZZER_CONFUSED: '困惑',
        PASSIVEBUZZER_FART1: '放屁1',
        PASSIVEBUZZER_FART2: '放屁2',
        PASSIVEBUZZER_FART3: '放屁3'
    });
    return Blockly;
}

exports = addMsg;
