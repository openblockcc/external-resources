/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        OLED_CATEGORY: 'OLED',
        OLED_INIT: 'init oled width %1 height %2 I2C address %3',
        OLED_DRAWLINE: 'oled draw line x0: %1 y0: %2, x1: %3 y1：%4 color %5',
        OLED_COLOR_WHITE: 'white',
        OLED_COLOR_BLACK: 'black',
        OLED_COLOR_INVERSE: 'inverse',
        OLED_DRAWRECT: 'oled draw rect x: %1 y: %2 width %3 height %4 color %5',
        OLED_FILLRECT: 'oled fill rect x: %1 y: %2 width %3 height %4 color %5',
        OLED_DRAWCIRCLE: 'oled draw circle x: %1 y: %2 radius %3 color %4',
        OLED_FILLCIRCLE: 'oled fill circle x: %1 y: %2 radius %3 color %4',
        OLED_DRAWROUNDRECT: 'oled draw round rect x: %1 y: %2 width %3 height %4 radius %5 color %6',
        OLED_FILLROUNDRECT: 'oled fill round rect x: %1 y: %2 width %3 height %4 radius %5 color %6',
        OLED_DRAWTRIANGLE: 'oled draw triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7',
        OLED_FILLTRIANGLE: 'oled fill triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7',
        OLED_SETTEXT: 'set oled text size %1 color %2 background color %3',
        OLED_SETCURSOR: 'set oled cursor x: %1 y: %2',
        OLED_PRINT: 'oled print %1 %2',
        OLED_EOL_WARP: 'warp',
        OLED_EOL_NOWARP: 'no-warp',
        OLED_CLEAR: 'clear oled',
        OLED_REFRESH: 'refresh oled display',
        OLED_STARTSCROLL: 'oled start scroll %1 y0: %2 y1: %3',
        OLED_SCROLL_RIGHT: 'right',
        OLED_SCROLL_LEFT: 'left',
        OLED_SCROLL_DIAGRIGHT: 'diag right',
        OLED_SCROLL_DIAGLEFT: 'diag left',
        OLED_STOPSCROLL: 'oled stop scroll'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        OLED_CATEGORY: 'OLED',
        OLED_INIT: '初始化 oled 宽度 %1 高度 %2 I2C 地址 %3',
        OLED_DRAWLINE: 'oled 绘制直线 x0: %1 y0: %2, x1: %3 y1：%4 颜色 %5',
        OLED_COLOR_WHITE: '白色',
        OLED_COLOR_BLACK: '黑色',
        OLED_COLOR_INVERSE: '反转',
        OLED_DRAWRECT: 'oled 绘制矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5',
        OLED_FILLRECT: 'oled 填充矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5',
        OLED_DRAWCIRCLE: 'oled 绘制圆形 x: %1 y: %2 半径 %3 颜色 %4',
        OLED_FILLCIRCLE: 'oled 填充圆形 x: %1 y: %2 半径 %3 颜色 %4',
        OLED_DRAWROUNDRECT: 'oled 绘制圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6',
        OLED_FILLROUNDRECT: 'oled 填充圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6',
        OLED_DRAWTRIANGLE: 'oled 绘制三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7',
        OLED_FILLTRIANGLE: 'oled 填充三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7',
        OLED_SETTEXT: '设置 oled 字体大小 %1 颜色 %2 背景色 color %3',
        OLED_SETCURSOR: '设置 oled 光标 x: %1 y: %2',
        OLED_PRINT: 'oled 打印 %1 %2',
        OLED_EOL_WARP: '换行',
        OLED_EOL_NOWARP: '不换行',
        OLED_CLEAR: '清空 oled',
        OLED_REFRESH: '刷新 oled 显示',
        OLED_STARTSCROLL: 'oled 开始滚动 %1 y0: %2 y1: %3',
        OLED_SCROLL_RIGHT: '向右',
        OLED_SCROLL_LEFT: '向左',
        OLED_SCROLL_DIAGRIGHT: '右对角',
        OLED_SCROLL_DIAGLEFT: '左对角',
        OLED_STOPSCROLL: 'oled 停止滚动'
    });
    return Blockly;
}

exports = addMsg;
