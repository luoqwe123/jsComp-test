



export interface Options {
    width?: number, // 水印的宽
    height?: number, // 水印的高
    content?: string | string[],
    rotate?: number, // 水印的旋转角度
    zIndex?: number,
    gap?: [number, number], // 水印之间的间隔
    offset?: [number, number], // 水印从容器左上角的偏移
    font?: Font
}


interface Font {
    color: string,
    fontSize: number,
    fontFamily: string,
    fontStyle: fontStyle,
    textAlign: textAlign,
    textBaseline: textBaseline
}

type fontStyle = "initial" | "normal" | "italic" | "oblique"



type textAlign = 'left' | 'right' | 'center' | 'start' | 'end';

type textBaseline = 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom';