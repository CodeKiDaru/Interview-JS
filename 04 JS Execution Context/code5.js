var num = 2;

function one(){
    var y = 1;
    console.log(y)
}

function two(){
    let x = 2;
    one();
    console.log(x)
}

two();

console.log(num);