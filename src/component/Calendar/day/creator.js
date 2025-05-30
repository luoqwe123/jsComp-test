
import { weekDay, DAYSNUM } from "../config";
import {  getDateInfo,  } from "../utils";
import { getShowDay  } from "./utils"


export function createThead() {
    const oThead = document.createElement("thead");
    oThead.className = "date-thead";
    weekDay.forEach(item => {
        const oTh = document.createElement("th");
        oTh.textContent = item;
        oThead.appendChild(oTh);
    })
    return oThead;
}

export function createTd(year, month, days) {
    const date = getDateInfo();
    const currentDay = date.day;
    const currentMonth = date.month;
    const currentYear = date.year;
    const oTds = [];
    for (const key in days) {
        days[key].forEach(item => {
            const oTd = document.createElement("td");
            oTd.className = "date-td";
            if (key === "current") {
                oTd.classList.add("this-month");
                if (currentDay === item && currentMonth === month && currentYear === year) {
                    oTd.classList.add("current");
                }
            }else{
                oTd.classList.add("other-month");
            }
            oTd.textContent = item;
            oTds.push(oTd);
        })
    }
    return oTds;
}


function createTbody(year,month) {
    
    const oTbody = document.createElement("tbody");
    oTbody.className = "date-tbody";
    const oTrs =  createTrs(year,month,(oTr)=>{
        oTbody.appendChild(oTr);
    });
    return oTbody;

}
export function createTrs (year,month,handler){
    const days = getShowDay(year,month);
    const num = Math.ceil(DAYSNUM / 7);
    const oTds = createTd(year,month,days);
    let index = 0;
    const res = [];
    for (let i = 0; i < num; i++) {
        const oTr = document.createElement("tr");
        oTr.className = "date-tr";
        for (let j = 0; j < 7; j++) {
            oTr.appendChild(oTds[index++]);
        }
        res.push(oTr);
        handler && handler(oTr)
    }
    return res;
}


export function createTable(year, month) {
    const oTabel = document.createElement("table");
    oTabel.className = "date-table";
    const oThead = createThead();
    const oTbody = createTbody(year,month);
    oTabel.appendChild(oThead);
    oTabel.appendChild(oTbody);
    return oTabel;
}

export function createControTitle (year,month){
    const oControl = document.createElement("div");
    oControl.className  = "day-control-box";
    const controlTitle = `
        <div class="day-control-title">
            <div class="control-lt">
                <button class="control-btn control-year-lt">&lt;&lt;</button>
                <button class="control-btn control-month-lt">&lt;</button>
            </div>
            <div class="control-title">
                <span class="show-title title-year-cn"> <span class="title-year">${year}</span>年</span>
                <span class="show-title title-month-cn"> <span class="title-month">${month}</span>月</span>
            </div>
            <div class="control-gt">
                <button class="control-btn control-month-gt">&gt;</button>
                <button class="control-btn control-year-gt">&gt;&gt;</button>
            </div>
        </div>
    `;
    oControl.innerHTML = controlTitle;
    return oControl;
}




