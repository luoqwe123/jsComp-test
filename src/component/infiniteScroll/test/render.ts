
import './index.scss'

export function render(oApp: Element, register: Function) {
    
    let itemCount = 0;
    const oContainer = document.createElement("div");
    oContainer.className = "infinite-scroll-container" ;
    function load() {
        itemCount += 6;
        const oUl  = oContainer.children[0];
        oUl.innerHTML = '';
        for (let i = 0; i < itemCount; i++) {
            const div = document.createElement('div');
            div.className = 'item';
            div.id = `item-${i}`;
            div.textContent = `Item ${i}`;
            oUl.appendChild(div);
        }
    }
    register("load",load);
    const HtmlStr = `
        <ul xida-infinite-scroll="load" class="infinite-list" infinite-scroll-disabled="true" 
        infinite-scroll-delay="200" infinite-scroll-distance="0"  infinite-scroll-immediate="true" style="overflow: auto">
            
        </ul>
    `;
    oContainer.innerHTML = HtmlStr;
    oApp.appendChild(oContainer);

}



