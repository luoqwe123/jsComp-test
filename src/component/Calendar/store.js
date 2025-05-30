
import { getDateInfo } from "./utils";
import { render as monthRender, update as monthUpdate } from "./month/render";
import { render as dayRender, update as dayUpdate } from "./day/render";
import { render as yearRender, update as yearUpdate } from "./year/render"


export const ALLOWED_FLAGS = {
    "YEAR": "year",
    "MONTH": "month",
    "DATE": "date"
};

let  flag = ALLOWED_FLAGS.DATE;

export function getFlag() {
    return flag;
};

export function setFlag(mode, container, dateInfo) {
    flag = mode;
    const { year,month } = dateInfo;
    switch (flag) {
        case ALLOWED_FLAGS.YEAR:
            yearRender(container,year,month);
            break;
        case ALLOWED_FLAGS.MONTH:
            monthRender(container,year);
            break;
        case ALLOWED_FLAGS.DATE:
            dayRender(container,year,month);
            break;
        default:
            break;
    }
}


export function reactive(date) {
    const dateInfo = getDateInfo(date);

    const _dateInfo = {};
    Object.defineProperties(_dateInfo, {
        year: {
            get() {

                return dateInfo.year;
            },
            set(value) {
                dateInfo.year = value;

                update(dateInfo.year, dateInfo.month);
            }
        },
        month: {
            get() {
                return dateInfo.month;
            },
            set(value) {
                dateInfo.month = value;
                update(dateInfo.year, dateInfo.month);// 使用 dateInfo，避免递归
            }
        }
    });

    return _dateInfo;
}


export function update(year,month){
    switch(flag){
        case ALLOWED_FLAGS.YEAR:
            yearUpdate(year,month)
            break;
        case ALLOWED_FLAGS.MONTH :
            monthUpdate(year)
            break;
        case ALLOWED_FLAGS.DATE:
            dayUpdate(year,month)
            break;
        default: 
            break;
    }
}