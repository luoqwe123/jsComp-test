
import { Info as InfoIcon } from "../Icon"
 
export function createNode (type,content,showClose,iconWidth,iconHeight,iconColor){
    const oMessage = document.createElement("div");
    oMessage.className = "message-container message-show";
    showClose = showClose? "block" : "none";
    const messageContent = `
        <div class="icon-box">
            ${InfoIcon(iconWidth,iconHeight,iconColor)}
        </div>
        <div class="${type} message-content ">
            ${content}
        </div>
        <button class="close-btn" style="display:${showClose}">x</button>
    `;
    oMessage.innerHTML = messageContent;
    return oMessage;
}

