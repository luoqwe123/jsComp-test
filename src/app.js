import MyCalendar from "./component/Calendar/index"

import MyPopconfrim from "./component/PopConfirm/index"
import event from "./event";
import MyWaterMark from "./component/WaterMark/index"

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
    event(".show-message-btn")
})()


