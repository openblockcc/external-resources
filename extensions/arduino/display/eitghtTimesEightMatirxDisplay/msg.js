/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
function addMsg (Blockly) {
    Object.assign(Blockly.ScratchMsgs.locales.en, {
        EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY: '8x8 Matrix Display',
        EITGHTTIMESEIGHTMATIRXDISPLAY_INIT: 'init 8x8 matrix display pin CS %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_INIT_TOOLTIP: 'pin DIN to MOSI and CLK to SCK.',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWPIXEL: '8x8 martix display draw pixel x: %1 y: %2 color %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED: 'red',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK: 'black',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWLINE: '8x8 martix display draw line x0: %1 y0: %2, x1: %3 y1: %4 color %5',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWCHAR: '8x8 martix display show char %1 color %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWNUMBER: '8x8 martix display show number %1 color %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_FILL: '8x8 martix display fill color %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_REFRESH: 'refresh the display of 8x8 martix display',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETBRIGHTNESS: '8x8 martix display set brightness %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETROTATION: '8x8 martix display set rotation %1'

    });
    Object.assign(Blockly.ScratchMsgs.locales['zh-cn'], {
        EITGHTTIMESEIGHTMATIRXDISPLAY_CATEGORY: '8x8点阵屏',
        EITGHTTIMESEIGHTMATIRXDISPLAY_INIT: '初始化8x8点阵屏引脚 CS %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_INIT_TOOLTIP: '引脚 DIN 接 MOSI， CLK 接 SCK。',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWPIXEL: '8x8点阵屏绘制点 x: %1 y: %2 颜色 %3',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_RED: '红色',
        EITGHTTIMESEIGHTMATIRXDISPLAY_COLOR_BLACK: '黑色',
        EITGHTTIMESEIGHTMATIRXDISPLAY_DRAWLINE: '8x8点阵屏绘制直线 x0: %1 y0: %2, x1: %3 y1: %4 颜色 %5',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWCHAR: '8x8点阵屏显示字符 %1 颜色 %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SHOWNUMBER: '8x8点阵屏显示数字 %1 颜色 %2',
        EITGHTTIMESEIGHTMATIRXDISPLAY_FILL: '8x8点阵屏填充颜色 %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_REFRESH: '刷新8x8点阵屏显示',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETBRIGHTNESS: '8x8点阵屏设置亮度 %1',
        EITGHTTIMESEIGHTMATIRXDISPLAY_SETROTATION: '8x8点阵屏设置旋转 %1'
    });
    return Blockly;
}

exports = addMsg;
