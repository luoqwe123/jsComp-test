import "./index.scss"
import { createYearNode,createYearControlArea } from "./creator";
import { getStartAndEndYear } from "./utils.js";

export function render(container,year){
    container.innerHTML  = "";
    const otable = document.createElement('table');
    otable.className = "my-year-calendar-table";
    const yearNode = createYearNode(year);
    const controlArea = createYearControlArea(year);
    yearNode.forEach(year =>{
        otable.appendChild(year);

    })
    container.appendChild(controlArea);
    container.appendChild(otable);

}


export function update(year) {
    let oTable = document.querySelector(".my-year-calendar-table");
    const oStartYear = document.querySelector(".start-year");
    const oEndYear = document.querySelector(".end-year");
    const [ startYear,endYear ] = getStartAndEndYear(year);
    oStartYear.textContent = startYear;
    oEndYear.textContent = endYear;
    oTable.innerHTML = '';
    let yearTrs = createYearNode(year);
    yearTrs.forEach(tr => {
        oTable.appendChild(tr)
    });
}