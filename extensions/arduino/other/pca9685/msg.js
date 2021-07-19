/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: 'init pca9685 iic address %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 set to servo mode',
        PCA9685_SETSERVOANGLE: 'pca9685 set channel %1 servo angle %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 set all servo angle %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 set pwm frequency %1',
        PCA9685_SETCHANNELPWM: 'pca9685 set channel %1 pwm value %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 set all channel pwm value %1'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        PCA9685_CATEGORY: 'PCA9685',
        PCA9685_INIT: '初始化 pca9685 iic 地址 %1',
        PCA9685_SETTOSERVOMODE: 'pca9685 设置为舵机模式',
        PCA9685_SETSERVOANGLE: 'pca9685 设置通道 %1 舵机角度 %2',
        PCA9685_SETALLSERVOANGLE: 'pca9685 设置所有舵机角度 %1',
        PCA9685_SETPWMFREQUENCY: 'pca9685 设置 pwm 频率 %1',
        PCA9685_SETCHANNELPWM: 'pca9685 设置通道 %1 pwm 值 %2',
        PCA9685_SETALLCHANNELPWM: 'pca9685 设置所有通道 pwm 值 %1'
    });
    return Blockly;
}

exports = addMsg;
