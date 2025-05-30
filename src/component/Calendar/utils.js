


export function getDateInfo(date) {
    const newDate = date ? new Date(date) : new Date();
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1;
    const day = newDate.getDate();
    return { year, month, day };
}


export function createTrs(num){
    const res  = [];
    for(let i= 0;i<num;i++){
        const oTr = document.createElement("tr");
        oTr.className = "date-tr";
        res.push(oTr);
    }
    return res;
}