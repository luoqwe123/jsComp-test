
import { judgeIsVertical,  styleObjectToCss } from "./utils.js";

import {  getConfirmStyle, applyPlacementModifier,setConfirmBeforeBorderStyle } from "./style.js"
import { reactive } from "./stores.js";
import { defaultConfig } from "./config.js";

export function createBtn(value) {
    const btn = document.createElement("button");
    btn.style.position = "relative";
    const oSpan = document.createElement("span");
    btn.type = "button";
    btn.className = "xida-button";
    oSpan.textContent = value;
    btn.appendChild(oSpan)
    return btn;
}


/**
 * 
 * @param {*} question 
 * @param {*} placement  top-start
 * @param {*} btnInfo 
 * @returns 
 */

export function createConfirm(question, placement, btnInfo) {
    const oConfirm = document.createElement("div");
    oConfirm.className = "confirm-box";
    const [position, modifier] = placement.split('-');
    const style = document.createElement('style');
    const isVertical = judgeIsVertical(position);

    const oConfirmTransform = {
        id: "oConfirm",
        x: 0,
        y: 0,
    };
    const oConfirmBeforePosition = {
        id: "oConfirmBefore",
    };
    let oConfirmStyle = {};
    let oConfirmBeforeStyle = {};
    const oConfirmTransformRef = reactive(oConfirmTransform, oConfirmStyle);
    const oConfirmBeforePositionRef = reactive(oConfirmBeforePosition, oConfirmBeforeStyle);
    getConfirmStyle(
        position,
        oConfirmTransformRef,
        oConfirmStyle,
        btnInfo,
    );
    setConfirmBeforeBorderStyle(oConfirmBeforeStyle,oConfirmBeforePositionRef, position, isVertical);
    // console.log(oConfirmBeforeStyle)

    // 应用位置修饰符
    if (modifier) {
        applyPlacementModifier(
            modifier,
            oConfirmTransformRef,
            oConfirmBeforePositionRef,
            isVertical
        );
    }
    Object.entries(oConfirmStyle).forEach(([key, value]) => {
        oConfirm.style[key] = value;
    });
    const confrimHTML = `
        <div class="confirm-container placement-${placement}" >
            <div class="confirm-question">
                <span>${question}</span>
            </div>
            <div class="confirm-control-area">
                <button class="control-btn confirm-control-no">
                    ${defaultConfig.cancelText}
                </button>
                <button class="control-btn confirm-control-yes">
                    ${defaultConfig.confirmText}
                </button>
            </div>
        </div>
    `;
    const oConfirmBeforeStr = styleObjectToCss(oConfirmBeforeStyle);
    style.textContent = `
    .placement-${placement}::before {
        content: '';
        ${oConfirmBeforeStr}
        position: absolute;
        z-index: 99;
        filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
    }
`;
    document.head.appendChild(style);
    oConfirm.innerHTML = confrimHTML;
    return oConfirm;

}