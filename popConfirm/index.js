
import { renderBtn, } from "./render.js";
import { handlerBtnClick } from "./event.js"

import "./index.scss"
/**
 * 
 * @param {*} el 
 * @param {*} placement  确认框的位置
 * @param {*} value     按钮的文字
 * @param {*} question  确认框的问题
 * @param {*} handler   
 * @param {*} options   确认框中按钮的回调  ，yes 和 no
 */

export default function (el, placement, value, question, options) {
    const oApp = document.querySelector(el);
    const oContainer = document.createElement("div");
    oContainer.className = "my-popconfirm";
    const oBtn = renderBtn(oContainer, value);
    handlerBtnClick(oBtn, question, placement,options);
    oApp.appendChild(oContainer);
   
   
}