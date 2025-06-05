



export interface options {
    width: number, // 水印的宽
    height: number, // 水印的高
    image?: string, // 以照片作为水印
    content: string | string[],
    totate: number, // 水印的旋转角度
    zIndex: number, 
    gap:  [number,number], // 水印之间的间隔
    offset: [number,number], // 水印从容器左上角的偏移
}