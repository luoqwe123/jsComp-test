

import { getDateInfo, createTrs } from "../utils";
import { getStartAndEndYear, getDecadeYear } from "./utils";

const domPool = {
    controlArea: null,
};


export function createYearControlArea(year) {
    const [startYear, endYear] = getStartAndEndYear(year);
    if (!domPool.controlArea) {
        domPool.controlArea = document.createElement("div");
        domPool.controlArea.className = "year-control-area";
        domPool.controlArea.innerHTML = `
            <span class="year-control-btn btn-year-lt">&lt;&lt;</span>
            <span class="control-show">
                <span class="control-title">
                    <span  class="start-year">${startYear}</span>
                </span>
                -
                <span class="control-title ">
                    <span  class="end-year">${endYear}</span>
                </span>
            </span>    
            <span class="year-control-btn btn-year-gt">&gt;&gt;</span>
        `
    } else {
        domPool.controlArea.querySelector(".start-year").textContent = startYear;
        domPool.controlArea.querySelector(".end-year").textContent = endYear;
    }
    return domPool.controlArea;

}

export function createYearTD(year) {
    const decadeYear = getDecadeYear(year);
    const currentYear = getDateInfo().year;
    const resArr = [];
    decadeYear.forEach(year => {
        const oTd = document.createElement("td");
        oTd.className = "year decade-year";
        if (year === currentYear) oTd.classList.add("current");
        oTd.textContent = year;
        oTd.setAttribute("data-year", year)
        resArr.push(oTd);
    });
    return resArr;
}

export function createYearNode(year) {
    const yearTrArr = createTrs(3);
    const yearTds = createYearTD(year);
    let index = 0;
    yearTrArr.forEach(tr => {
        for (let i = 0; i < 4 && yearTds[index]; i++) {
            tr.appendChild(yearTds[index++]);
        }
    })

    return yearTrArr;
}