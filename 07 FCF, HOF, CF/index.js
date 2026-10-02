// What is first class function

// function - first class citizens (value)

// function greet(){
//     console.log("hello how are you")
// }

// var fn = greet
// fn()

// All function --> value --> first class function

function greet() {
    console.log("hello")
}

function execute(fn) {
    fn();
}

execute(greet)

// execute --> hof
// pass a function as an argument
// return a function

function multiplier(x) {
    return function (y) {
        console.log(x * y)
    }
}

let fn = multiplier(3);
fn(7)



function A() {
    console.log("A");
}

function B(fn) {
    console.log("B");
    fn();
}

B(A);