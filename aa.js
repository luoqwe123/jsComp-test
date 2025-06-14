let index = 0;

let timer = setTimeout(add.bind(null), 1000);


function add() {
    index++;
    console.log(index);
}

function abc(time) {
   
    clearTimeout(time);
    add()
}

// setTimeout(abc.bind(null,timer),300); //  可行


let target = "newFn";
let reg = new RegExp(`\b${target}\b`)
let a = "return newFn"
// console.log(reg.test(a))


let b = new Set(1,1)
console.log([...b])



