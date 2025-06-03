
import { render,close } from "./render";
import event from "./event";

//  给每个没消失的message 设置唯一表示，以便为后面的message设置top 

/**
 * 
 * @param {*} options delay : 展示时间    distanceInter： 消息的间距    showClose ： 是否展示关闭的按钮
 * @param {*} handler 
 */
export default function  (options,handler){
    let { content,delay,distance,showClose,type } = options;
    delay = delay ? delay : 3000;
    distance = distance ? distance : 10;
    const instance = render(content,showClose,type,distance);
    let timer = setTimeout(close.bind(null,instance,distance),delay);
    event(instance,distance,timer);
}