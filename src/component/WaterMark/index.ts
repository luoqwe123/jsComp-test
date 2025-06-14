
import { getElement } from "../utils";
import { defaultOptions,defaultNode } from "./config";
import { Options } from "./types";
import { render } from "./render";

export default function (val:string,options:Options = defaultOptions,insertNode:Element = defaultNode()){
    const oApp = getElement(val);
    const oContainer = document.createElement("div");
    oContainer.className = 'my-WaterMark';
    render(oContainer as Element,options,insertNode);
    (oApp as Element).appendChild(oContainer);


}
