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

setTimeout(abc.bind(null,timer),300); //  可行