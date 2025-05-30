






import { getDateInfo, createTrs } from "../utils";
import { months } from "../config";

const domPool = {
    controlArea: null,
};


export function createMonthControlArea(year) {

    if (!domPool.controlArea) {
        domPool.controlArea = document.createElement("div");
        domPool.controlArea.className = "month-control-area";
        domPool.controlArea.innerHTML = `
            <span class="month-control-btn btn-month-lt">&lt;&lt;</span>
            <span class="control-show">
                <span class="control-title">
                    <span  class="current-year">${year}</span>
                </span>
            </span>    
            <span class="month-control-btn btn-month-gt">&gt;&gt;</span>
        `
    }
    return domPool.controlArea;

}

export function createMonthTD(year) {
    const currentMonth = getDateInfo().month;
    const currentYear = getDateInfo().year;
    const resArr = [];
    months.forEach((month,index) => {
        const oTd = document.createElement("td");
        oTd.className = "month static-month";
        if (index === currentMonth-1 && year === currentYear) oTd.classList.add("current");
        oTd.textContent = month;
        oTd.setAttribute("data-month", index+1)
        resArr.push(oTd);
    });
    return resArr;
}

export function createMonthNode(year) {
    const monthTrArr = createTrs(3);
    const monthTds = createMonthTD(year);
    let index = 0;
    monthTrArr.forEach(tr => {
        for (let i = 0; i < 4 && monthTds[index]; i++) {
            tr.appendChild(monthTds[index++]);
        }
    })

    return monthTrArr;
}