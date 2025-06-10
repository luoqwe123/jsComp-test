


const callbackMap = new Map();


export function getCallback(name:string):Function{
    return callbackMap.get(name);
}


export function registerCallback(name:string,fn:Function){
    
    callbackMap.set(name,fn);
}