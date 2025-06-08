

import { Options } from "./types";


export function createWatermarkImage(props: Options) {
    const { width, height, content, rotate, zIndex, gap, offset, font } = props;
    const { color, fontFamily, fontSize, fontStyle, textBaseline, textAlign } = font!;
    const canvas = document.createElement("canvas");
    // 水印单位
    canvas.width = width! -gap![0]/2;
    canvas.height = height! -gap![1]/2;
    let ctx:CanvasRenderingContext2D = canvas.getContext("2d")!;
    if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // 清空画布
        let props = {
            font: `${fontStyle} ${fontSize}px ${fontFamily}`,
            fillStyle: color,
            textBaseline: textBaseline,
            textAlign: textAlign,

        }
        ctx = Object.assign(ctx,props);
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((rotate! * Math.PI) / 180);
        let textContent: string[];
        if (content) {
            textContent = Array.isArray(content) ? content : [content];
            textContent.forEach((item, index) => {
                ctx.fillText(item ?? "", 0+offset![0], -fontSize / 2 + index * fontSize+offset![1]);
            })
        }
        return canvas.toDataURL("image/png");
    }
    return undefined;
}

