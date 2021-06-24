/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        CHINESETTS_CATEGORY: 'Chinese TTS',
        CHINESETTS_INIT: 'init chinese TTS module pin RX %1 TX %2',
        CHINESETTS_SAY: 'chinese TTS module say %1',
        CHINESETTS_SAYUNTILLFINISH: 'chinese TTS module say %1 untill finish',
        CHINESETTS_PLAYSOUND: 'chinese TTS module play sound %1',
        CHINESETTS_PLAYSOUNDUNTILLFINISH: 'chinese TTS module play sound %1 untill finish',
        CHINESETTS_SETVOLUME: 'chinese TTS module set volume %1',
        CHINESETTS_SETSPEECHRATE: 'chinese TTS module set speech rate %1',
        CHINESETTS_SETPOWERONPROMPT: 'chinese TTS module set sound of power on prompt %1',
        CHINESETTS_STATE_OFF: 'off'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        CHINESETTS_CATEGORY: '中文 TTS',
        CHINESETTS_INIT: '初始化中文 TTS 模块引脚 RX %1 TX %2',
        CHINESETTS_SAY: '中文 TTS 模块说 %1',
        CHINESETTS_SAYUNTILLFINISH: '中文 TTS 模块说 %1 直到完成',
        CHINESETTS_PLAYSOUND: '中文 TTS 模块播放音效 %1',
        CHINESETTS_PLAYSOUNDUNTILLFINISH: '中文 TTS 模块播放音效 %1 直到完成',
        CHINESETTS_SETVOLUME: '中文 TTS 模块设置音量 %1',
        CHINESETTS_SETSPEECHRATE: '中文 TTS 模块设置语速 %1',
        CHINESETTS_SETPOWERONPROMPT: '中文 TTS 模块设置上电提示音效 %1',
        CHINESETTS_STATE_OFF: '关闭'
    });
    return Blockly;
}

exports = addMsg;
