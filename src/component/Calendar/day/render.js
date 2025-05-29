import { createControTitle, createTable, createTrs } from "./creator";


import "./index.scss"

export function render (container,year,month){
   
    const oTabel = createTable(year,month);
    const oControlBox = createControTitle(year,month);
    container.appendChild(oControlBox);
    container.appendChild(oTabel);
}

export function update(year,month){
    
    document.querySelector(".title-year").textContent = year;
    document.querySelector(".title-month").textContent = month;
    const oTbody = document.querySelector(".date-tbody");

    oTbody.innerHTML = "";
    createTrs(year,month,oTbody);
}