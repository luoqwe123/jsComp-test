
import { close } from "./render";

export default function (instance,distance,timer){
    const oContainer = instance.oMessage;
    
    oContainer.addEventListener("click",(el)=>{
        const className = el.target.className;
        if(className === "close-btn"){
            clearTimeout(timer);
            close(instance,distance);
        }
    },false)
}