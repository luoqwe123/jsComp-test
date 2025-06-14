

import { getCallback,registerCallback } from "./store";
export { registerCallback };

document.addEventListener("DOMContentLoaded", () => {
    const els = document.querySelectorAll("[xida-infinite-scroll]");
    console.log(els);
    els.forEach((item, index) => {
        const delay = item?.getAttribute("infinite-scroll-delay") || "200";
        const distance = item?.getAttribute("infinite-scroll-distance") || "0";
        const immediate = item?.getAttribute("infinite-scroll-immediate") === "true" || true; 

        const callbackName = item?.getAttribute("xida-infinite-scroll")!;
        const handler = getCallback(callbackName);
        
        addScrollEvent(item,Number(distance),Number(delay),immediate,handler)
    });

})



function addScrollEvent(el: Element, distance: number, limit: number, immediate: boolean, handler: Function) {
    console.log(el)
    if (immediate) {
       
        handler();
    }
    el.addEventListener("scroll", () => {
       
        if (isArriveDistance(el, distance)) {
            liteThrottle(handler, limit)();
        }
    });
}


function isArriveDistance(el: Element, distance: number) {
    // console.log(el.scrollHeight - (el.clientHeight + el.scrollTop))
    return el.scrollHeight - (el.clientHeight + el.scrollTop) <= distance;
}


function liteThrottle(fn: Function, limit: number) {
    let oldTime = 0;
    return function (this: any, ...agrs: any[]) {

        const nowTime: number = Date.now();
        if (nowTime - oldTime >= limit) {
            oldTime = nowTime;
            fn.apply(this, agrs);
        }
    }
}