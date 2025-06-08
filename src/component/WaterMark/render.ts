import "./index.scss"
import { Options } from "./types";
import { createWatermarkImage } from "./creator";

export function render(oContainer: Element, props: Options,insertNode:Element) {
    const obox = document.createElement("div");
    obox.className = 'my-WaterMark-box';
    const imageUrl = createWatermarkImage(props);
    const styleStr = `
        position : absolute;
        zIndex : ${props.zIndex!.toString()};
        backgroundRepeat : repeat;
        pointerEvents : none;
        left  : 0;
        top  : 0;
        width : 100%;
        height : 100%;
        background-image :  url(${imageUrl});
    `;
    obox.setAttribute('style', styleStr);
    obox.appendChild(insertNode);
    oContainer.appendChild(obox);

}


