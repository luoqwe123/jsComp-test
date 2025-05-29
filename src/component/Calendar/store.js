import { update } from "./day/render";
import { getDate } from "./utils";





export const ALLOWED_FLAGS = {
    "FEAR": "year",
    "MONTH": "month",
    "DATE": "date"
};

const flag = ALLOWED_FLAGS.DATE;

export function getFlag() {
    return flag;
};

export function setFlag(mode, container, dateInfo) {
    flag = mode.toUpperCase();
}


export function reactive(date) {
    const dateInfo = getDate(date);

    const _dateInfo = {};
    Object.defineProperties(_dateInfo, {
        year: {
            get() {
                
                return dateInfo.year;
            },
            set(value) {
                dateInfo.year = value;
               
                update(dateInfo.year,dateInfo.month);
            }
        },
        month: {
            get() {
                return dateInfo.month;
            },
            set(value) {
                dateInfo.month = value;
               
                console.log(value)
                update(dateInfo.year,dateInfo.month);// 使用 dateInfo，避免递归
            }
        }
    });
   
    return _dateInfo;
}