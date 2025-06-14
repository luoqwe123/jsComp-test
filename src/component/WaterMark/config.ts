
import {  Options } from "./types"


// 设置默认值的 Options
export const defaultOptions: Options = {
    width: 200,
    height: 200,
   
    content: "Watermark",
    rotate: -45,
    zIndex: 10,
    gap: [100, 100],
    offset: [-20, -10], // 水印的偏移
    font: {
        color: "#666",
        fontSize: 16,
        fontFamily: "Arial",
        fontStyle: 'normal',
        textAlign: "center",
        textBaseline: "top"
    }
};




export const defaultNode = ():Element=>{
    const oP  = document.createElement('p');
    oP.textContent = "这是我的水印组件";
    return oP;
}