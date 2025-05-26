

import { removeConfirm, renderConfirm } from "./render"

function getButtonInfo(btn) {
  return {
    top: btn.offsetTop,
    left: btn.offsetLeft,
    btnWidth: btn.offsetWidth,
    btnHeight: btn.offsetHeight
  };
}

export function handlerBtnClick (btn, question, placement,options) {

  btn.addEventListener("click", () => {
    const btnInfo = getButtonInfo(btn);
    const oConfirm =  renderConfirm(question, placement, btnInfo);
    handlerConfirmClick(oConfirm,options);
  }, false)
}



function handlerConfirmClick(oConfirm,options){
  
  
  oConfirm.addEventListener("click",(el)=>{
    
    const className = el.target.className;
    if(className === 'control-btn confirm-control-no'){
      options.no(className);
      removeConfirm(oConfirm);

    }
    if(className ===  "control-btn confirm-control-yes"){
      options.yes(className);
      removeConfirm(oConfirm);
    }
  },)

}


