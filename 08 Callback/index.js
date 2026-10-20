// function greet(){
//     console.log("hello")
// }

// function anotherfn(fn){
//     console.log("this is execute function")
//     fn()
// }

// anotherfn(greet) // greet is a callback function
// anotherfn(greet()) // greet is not a callback function


// function alpha(){
//     console.log('hi alpha')
// }

// function execute(fn){
//     fn();
// }

// // execute(alpha) // named callback 

// execute(function(){
//     console.log('anonymous')
// }) // anonymous callback

// execute(()=>{
//     console.log('arrow callback')
// })


// function calculate(a, b, fn){
//     return fn(a,b);
// }

// function sum(a, b){
//     return a+b;
// }

// const output = calculate(3,5, sum)
// console.log(output)



// let button = document.getElementById('button')
// button.addEventListener('click', function(){
//     console.log("clicked")
// })

// let arr = [1,3,5,10];

// arr.map((items)=>{
//     console.log(items)
// })


console.log("first")

function dusra(){
    console.log('hello')
}

setTimeout(function () {
    console.log("timer")
    dusra()
}, 3000);

console.log("last")