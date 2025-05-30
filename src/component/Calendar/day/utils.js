
import { DAYSNUM } from "../config";


export function getMonthFristWeekDay(year, month) {
    const weekDay = new Date(year, month - 1, 1);
    return weekDay.getDay();
}

export function getLastMonthRestDay(year, month, currentMonthFristDay) {
    const date = new Date(year, month - 1, 0);
    let endDay = date.getDate();
    const num = currentMonthFristDay === 0 ? 7 : currentMonthFristDay;
    const res = [];
    for (let i = 0; i < num; i++) {
        res.push(endDay--);
    }
    return res.reverse();
}



export function getCurrentMonthDays(year, month) {
    const data = new Date(year, month, 0);
    let endDay = data.getDate();
    const res = [];
    while (endDay > 0) {
        res.push(endDay--);
    }
    return res.reverse();
}


export function getNextMonthRestDay(currentNum, lastNum) {

    const resNum = DAYSNUM - currentNum - lastNum;
    const res = [];
    for (let i = 1; i <= resNum; i++) {
        res.push(i);
    }
    return res;
}


export function getShowDay(year, month) {
    const monthFristWeekDay = getMonthFristWeekDay(year, month);
    const currentMonthDays = getCurrentMonthDays(year, month);
    const lastMonthDays = getLastMonthRestDay(year, month, monthFristWeekDay);
    const nextMonthDays = getNextMonthRestDay(currentMonthDays.length, lastMonthDays.length);
    return { last: lastMonthDays, current: currentMonthDays, next: nextMonthDays };
}

