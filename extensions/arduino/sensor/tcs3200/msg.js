/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: 'init tcs3200 pin S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'The out pin is fixed: Arduino Uno pin 5, Arduino Leonardo pin 12, Arduino Mega pin 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 calibrate white',
        TCS3200_CALIBRATEBLACK: 'tcs3200 calibrate black',
        TCS3200_MEASURECOLOR: 'tcs3200 measure color',
        TCS3200_GETCOLORVALUE: 'tcs3200 get %1 value',
        TCS3200_COLOR_RED: 'red',
        TCS3200_COLOR_GREEN: 'green',
        TCS3200_COLOR_BLUE: 'blue'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        TCS3200_CATEGORY: 'TCS3200',
        TCS3200_INIT: '初始化 tcs3200 引脚 S0 %1 S1 %2 S2 %3 S3 %4 S5 %5',
        TCS3200_INIT_TOOLTIP: 'OUT 引脚是固定的: Arduino Uno 引脚 5, Arduino Leonardo 引脚 12, Arduino Mega 引脚 47',
        TCS3200_CALIBRATEWHITE: 'tcs3200 校准白色',
        TCS3200_CALIBRATEBLACK: 'tcs3200 校准黑色',
        TCS3200_MEASURECOLOR: 'tcs3200 测量颜色',
        TCS3200_GETCOLORVALUE: 'tcs3200 获取 %1 数值',
        TCS3200_COLOR_RED: '红色',
        TCS3200_COLOR_GREEN: '绿色',
        TCS3200_COLOR_BLUE: '蓝色'
    });
    return Blockly;
}

exports = addMsg;
