// import MyCalendar from "./component/Calendar/index.js"

import MyPopconfrim from "./component/PopConfirm/index.js"


;(() => {
    // MyCalendar("#app", null, (date) => {
    //     console.log(date)
    // });
    MyPopconfrim("#app", "top-start", 'top', "why asdfsda fs adsfd safsd", {
        yes: (data) => {
            console.log(data)
        },
        no: (data) => {
            console.log(data)
        }
    })
    MyPopconfrim("#app", "left-end", 'left', "why asdfsda fs adsfd safsd", {
        yes: (data) => {
            console.log(data)
        },
        no: (data) => {
            console.log(data)
        }
    })
    MyPopconfrim("#app", "right", 'right', "why asdfsda fs adsfd safsd", {
        yes: (data) => {
            console.log(data)
        },
        no: (data) => {
            console.log(data)
        }
    })
    MyPopconfrim("#app", "bottom", 'bottom', "why asdfsda fs adsfd safsd", {
        yes: (data) => {
            console.log(data)
        },
        no: (data) => {
            console.log(data)
        }
    })
})()


