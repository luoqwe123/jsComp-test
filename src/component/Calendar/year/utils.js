


export function getStartAndEndYear(year){
    const fontNum  = year.toString().slice(0,-1);
    return [Number(fontNum+"0"),Number(fontNum+"9")];
}

export function getDecadeYear(year){
    const res = [];
    let elYear = Number(year.toString().slice(0,-1) + 0);
    for(let i =0;i<=9;i++){
        res.push(elYear++);
    }
    return res;
}