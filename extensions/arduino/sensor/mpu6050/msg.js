/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: 'init mpu6050 accelerometer range %1 gyro range %2 filter bandwidth %3',
        MPU6050_READDATA: 'mpu6050 read data',
        MPU6050_ACCELERATION: 'mpu6050 %1 axis acceleration (m/s^2)',
        MPU6050_GYRO: 'mpu6050 %1 axis rotation (rad/s)',
        MPU6050_TEMPERATURE: 'mpu6050 temperature (℃)'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        MPU6050_CATEGORY: 'MPU6050',
        MPU6050_INIT: '初始化 mpu6050 加速度计范围 %1 陀螺仪范围 %2 滤波器带宽 %3',
        MPU6050_READDATA: 'mpu6050 读取数据',
        MPU6050_ACCELERATION: 'mpu6050 %1 轴加速度 (m/s^2)',
        MPU6050_GYRO: 'mpu6050 %1 轴角速度 (rad/s)',
        MPU6050_TEMPERATURE: 'mpu6050 温度 (℃)'
    });
    return Blockly;
}

exports = addMsg;
