import { ALLOWED_FLAGS, getFlag, setFlag } from "./store";

let track = null;

export default (...args) => {
    const [container] = args;
    container.addEventListener("click", handlerClick.bind(null, ...args), false);
}

function handlerClick(...args) {
    const [container, handler, dateInfo, el] = args;

    const target = el.target;
    const className = target.className;
    const flag = getFlag();
    if (className.includes("current-day")) {
        handlerDateClick(target, handler);
        return;
    }
     if (className.includes("decade-year")) {
        handlerYearClick(container, target, dateInfo);
        return;
    }
    if(className === "static-month"){
        handlerMonthClick(container,target,dateInfo)
    }
    if (className === 'title-year') {
        titleYearClick(container, dateInfo);
        return;
    }
    if (className === 'title-month') {
        titleMonthClick(container, dateInfo);
        return;
    }
   


    switch (flag) {
        case ALLOWED_FLAGS.YEAR:
            yearControlClick(className, dateInfo)
            break;
        case ALLOWED_FLAGS.MONTH:
            monthControlClick(className,dateInfo)
            break;
        case ALLOWED_FLAGS.DATE:
            dateControlClick(className, dateInfo)
            break;
        default:
            break;
    }
    // handlerControlClick(className, dateInfo)
}

function dateControlClick(className, dateInfo) { 

    switch (className) {
        case "control-btn btn-year-lt":
            dateInfo.year -= 1;
            break;
        case "control-btn btn-month-lt":
            dateInfo.month > 1 && (dateInfo.month -= 1);
            break;

        case "control-btn btn-year-gt":
            dateInfo.year += 1;
            break;
        case "control-btn btn-month-gt":
            dateInfo.month < 12 && (dateInfo.month += 1);
            break;
        default:
            break;
    }
}

function titleYearClick(container, dateInfo) {
    setFlag(ALLOWED_FLAGS.YEAR, container, dateInfo);
}
function titleMonthClick (container,dateInfo){
    setFlag(ALLOWED_FLAGS.MONTH,container,dateInfo);
}

function yearControlClick(className, dateInfo) {
    switch (className) {
        case "year-control-btn btn-year-lt":
            dateInfo.year -= 10;
            break;
        case "year-control-btn btn-year-gt":
            dateInfo.year += 10;
            break;
        default:
            break;

    }
}

function monthControlClick(className, dateInfo) {
    
    switch (className) {
        case "month-control-btn btn-month-lt":
            dateInfo.year -= 1;
            break;
        case "month-control-btn btn-month-gt":
            dateInfo.year += 1;
            break;
        default:
            break;

    }
}

function handlerDateClick(target, handler) {
    track && track.classList.remove("selected");
    if (!target.className.includes('selected')) {
        target.classList.add("selected");
        track = target;
    }
    handler && handler(target.dataset.date);
}

function handlerYearClick(container, target, dateInfo) {
    dateInfo.year = Number(target.dataset.year);
    setFlag(ALLOWED_FLAGS.DATE, container, dateInfo);
}

function handlerMonthClick(container,target,dateInfo){
    
    dateInfo.month = Number(target.dataset.month);
    setFlag(ALLOWED_FLAGS.DATE, container, dateInfo);
}