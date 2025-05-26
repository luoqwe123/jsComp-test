import { createBtn, createConfirm } from "./creator.js";
import "./index.scss";

export function renderBtn(container, value) {
    const btn = createBtn(value);
    container.appendChild(btn);
    return btn;
}

export function renderConfirm(question,placement,btnInfo){
    const oConfirm = createConfirm(question, placement,btnInfo);
    document.body.appendChild(oConfirm);
    return oConfirm;
}



export function removeConfirm (oConfirm){
    document.body.removeChild(oConfirm);
}