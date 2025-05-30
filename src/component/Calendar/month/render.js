import "./index.scss"
import { createMonthNode, createMonthControlArea } from "./creator";


export function render(container, year) {
    container.innerHTML = "";
    const otable = document.createElement('table');
    otable.className = "my-month-calendar-table";
    const yearNode = createMonthNode(year);
    const controlArea = createMonthControlArea(year);
    yearNode.forEach(year => {
        otable.appendChild(year);

    })
    container.appendChild(controlArea);
    container.appendChild(otable);

}


export function update(year) {
    let oTable = document.querySelector(".my-month-calendar-table");
    const currentYear = document.querySelector(".current-year");
    currentYear.textContent = year;
    oTable.innerHTML = '';
    let monthTrs = createMonthNode(year);
    monthTrs.forEach(tr => {
        oTable.appendChild(tr)
    });
}