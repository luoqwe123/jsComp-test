


export function getElement(val: string) {
    const els = document.querySelectorAll(val);
    return els.length === 1 ? els[0] : els;
}   