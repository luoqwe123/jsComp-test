import { render } from "./day/render";
import { getDate } from "./utils";
import  event from "./event"
import { reactive } from "./store";

import "./index.scss";

export default (val,date,handler)=>{
    const oApp = document.querySelector(`${val}`);
    const oContainer = document.createElement("div");
    oContainer.className = "my-calendar";
    const dateInfo = reactive(date);
    render(oContainer,dateInfo.year,dateInfo.month);
    oApp.appendChild(oContainer);
    event(oContainer,handler,dateInfo);
   
}


