import MyCalendar from "./component/Calendar/index"
import { getElement } from "./component/utils";
import MyPopconfrim from "./component/PopConfirm/index"
import event from "./event";
import MyWaterMark from "./component/WaterMark/index"
import  { registerCallback } from  './component/infiniteScroll/index';
import   { render } from "./component//infiniteScroll/test/render"

; (() => {
    MyCalendar("#app", null, (date) => {
        console.log(date)
    });
    MyWaterMark("#app");
    MyPopconfrim("#app", "top-start", 'top', "why asdfsda fs adsfd safsd", {
        yes: (data) => {
            console.log(data)
        },
        no: (data) => {
            console.log(data)
        }
    })
    // MyPopconfrim("#app", "left-end", 'left', "why asdfsda fs adsfd safsd", {
    //     yes: (data) => {
    //         console.log(data)
    //     },
    //     no: (data) => {
    //         console.log(data)
    //     }
    // })
    // MyPopconfrim("#app", "right", 'right', "why asdfsda fs adsfd safsd", {
    //     yes: (data) => {
    //         console.log(data)
    //     },
    //     no: (data) => {
    //         console.log(data)
    //     }
    // })
    // MyPopconfrim("#app", "bottom", 'bottom', "why asdfsda fs adsfd safsd", {
    //     yes: (data) => {
    //         console.log(data)
    //     },
    //     no: (data) => {
    //         console.log(data)
    //     }
    // })
    // MyMessage({
    //     content: "success",
    //     showClose: true,
    //     type: "primary"
    // })
    event(".show-message-btn");
    render(getElement("#app"),registerCallback); // 使用方法与element-plus差不多，由于没有使用vue框架，需要自己创建子元素
    
    
})()


