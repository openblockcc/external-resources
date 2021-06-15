/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        OLED_CATEGORY: 'OLED',
        OLED_INIT: 'init oled width %1 height %2 I2C address %3',
        OLED_DRAWLINE: 'draw line x0: %1 y0: %2, x1: %3 y1：%4 color %5',
        OLED_COLOR_WHITE: 'white',
        OLED_COLOR_BLACK: 'black',
        OLED_COLOR_INVERSE: 'inverse',
        OLED_DRAWRECT: 'draw rect x: %1 y: %2 width %3 height %4 color %5',
        OLED_FILLRECT: 'fill rect x: %1 y: %2 width %3 height %4 color %5',
        OLED_DRAWCIRCLE: 'draw circle x: %1 y: %2 radius %3 color %4',
        OLED_FILLCIRCLE: 'fill circle x: %1 y: %2 radius %3 color %4',
        OLED_DRAWROUNDRECT: 'draw round rect x: %1 y: %2 width %3 height %4 radius %5 color %6',
        OLED_FILLROUNDRECT: 'fill round rect x: %1 y: %2 width %3 height %4 radius %5 color %6',
        OLED_DRAWTRIANGLE: 'draw triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7',
        OLED_FILLTRIANGLE: 'fill triangle x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 color %7',
        OLED_SETTEXT: 'set text size %1 color %2 background color %3',
        OLED_SETCURSOR: 'set cursor x: %1 y: %2',
        OLED_PRINT: 'print %1 %2',
        OLED_EOL_WARP: 'warp',
        OLED_EOL_NOWARP: 'no-warp',
        OLED_CLEAR: 'clear oled',
        OLED_REFRESH: 'refresh oled',
        OLED_STARTSCROLL: 'start scroll %1 y0: %2 y1: %3',
        OLED_SCROLL_RIGHT: 'right',
        OLED_SCROLL_LEFT: 'left',
        OLED_SCROLL_DIAGRIGHT: 'diag right',
        OLED_SCROLL_DIAGLEFT: 'diag left',
        OLED_STOPSCROLL: 'stop scroll'
    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        OLED_CATEGORY: 'OLED',
        OLED_INIT: '初始化 oled 宽度 %1 高度 %2 I2C 地址 %3',
        OLED_DRAWLINE: '绘制直线 x0: %1 y0: %2, x1: %3 y1：%4 颜色 %5',
        OLED_COLOR_WHITE: '白色',
        OLED_COLOR_BLACK: '黑色',
        OLED_COLOR_INVERSE: '反转',
        OLED_DRAWRECT: '绘制矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5',
        OLED_FILLRECT: '填充矩形 x: %1 y: %2 宽度 %3 高度 %4 颜色 %5',
        OLED_DRAWCIRCLE: '绘制圆形 x: %1 y: %2 半径 %3 颜色 %4',
        OLED_FILLCIRCLE: '填充圆形 x: %1 y: %2 半径 %3 颜色 %4',
        OLED_DRAWROUNDRECT: '绘制圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6',
        OLED_FILLROUNDRECT: '填充圆角矩形 x: %1 y: %2 宽度 %3 高度 %4 半径 %5 颜色 %6',
        OLED_DRAWTRIANGLE: '绘制三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7',
        OLED_FILLTRIANGLE: '填充三角形 x0: %1 y0: %2, x1: %3 y1: %4, x2: %5 y2: %6 颜色 %7',
        OLED_SETTEXT: '设置字体大小 %1 颜色 %2 背景色 color %3',
        OLED_SETCURSOR: '设置光标 x: %1 y: %2',
        OLED_PRINT: '打印 %1 %2',
        OLED_EOL_WARP: '换行',
        OLED_EOL_NOWARP: '不换行',
        OLED_CLEAR: '清空 oled',
        OLED_REFRESH: '刷新 oled',
        OLED_STARTSCROLL: '开始滚动 %1 y0: %2 y1: %3',
        OLED_SCROLL_RIGHT: '向右',
        OLED_SCROLL_LEFT: '向左',
        OLED_SCROLL_DIAGRIGHT: '右对角',
        OLED_SCROLL_DIAGLEFT: '左对角',
        OLED_STOPSCROLL: '停止滚动'
    });
    return Blockly;
}

exports = addMsg;
