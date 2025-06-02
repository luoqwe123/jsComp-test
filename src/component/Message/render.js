import "./index.scss";
import { createNode } from "./creator";
import { useOffset } from "./hooks";
import { TYPE_COLORS } from "./config";

const instances = [];
let id = 0;

export function render(content, showClose, type, distance) {

    const  iconColor = TYPE_COLORS[type];
    
    const oMessage = createNode(type, content, showClose, null, null, iconColor);
    oMessage.setAttribute("date-id", id);
    let top = distance;

    if (instances.length) {
        top = useOffset(instances[instances.length - 1].oMessage);
        oMessage.style.top = top + distance + 'px';
    }
    const instance = { id, oMessage };
    instances.push(instance);
    id++;
    // console.log(instances);
    document.body.appendChild(oMessage);
    return instance;

}

export function close(instance, distance) {
    const { oMessage } = instance;
    oMessage.className = oMessage.className.replace("message-show", "message-close");

    
    setTimeout(() => {
        const area = oMessage.offsetHeight + distance;
        oMessage.remove();
       
        const index = instances.findIndex(item => instance.id === item.id);
        instances.splice(index, 1);
        updatePlacement(area, index);
        if (instances.length === 0) id = 0;
    }, 300)

}

function updatePlacement(removeArea, removeIndex) {
    for (let i = removeIndex; i < instances.length; i++) {
        
        if (instances[i]) {
            const newTop = instances[i].oMessage.offsetTop - removeArea;
            instances[i].oMessage.style.top = newTop + 'px';// 某个属性变化可以使用过渡来增加动的效果（从旧值（因为其他元素的影响导致需要改变的）到新值），动画（从设定的值（为了动画而设置的）到最终的值）
            
           
        }
        
    }
}