/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        APDS9960_CATEGORY: 'APDS9960',
        APDS9960_INIT: 'init apds9960',
        APDS9960_ISGESTUREAVAILABLE: 'apds9960 gesture data ready?',
        APDS9960_READGESTURE: 'apds9960 read gesture',
        APDS9960_ISGESTURE: 'apds9960 read gesture %1?',
        APDS9960_GESTURE_UP: 'up',
        APDS9960_GESTURE_DOWN: 'down',
        APDS9960_GESTURE_LEFT: 'left',
        APDS9960_GESTURE_RIGHT: 'right',
        APDS9960_ISPROXIMITYAVAILABLE: 'apds9960 color data available?',
        APDS9960_READPROXIMITY: 'apds9960 read proximity'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        APDS9960_CATEGORY: 'APDS9960',
        APDS9960_INIT: '初始化 apds9960',
        APDS9960_ISGESTUREAVAILABLE: 'apds9960 手势数据准备就绪？',
        APDS9960_READGESTURE: 'apds9960 读取手势',
        APDS9960_ISGESTURE: 'apds9960 读取到手势 %1？',
        APDS9960_GESTURE_UP: '上',
        APDS9960_GESTURE_DOWN: '下',
        APDS9960_GESTURE_LEFT: '左',
        APDS9960_GESTURE_RIGHT: '右',
        APDS9960_ISPROXIMITYAVAILABLE: 'apds9960 接近值可用？',
        APDS9960_READPROXIMITY: 'apds9960 读取接近值'
    });
    return Blockly;
}

exports = addMsg;
