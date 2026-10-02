// Function Declaration / Function Statement
// greet();
// function greet(){
//     console.log('hello js')
// }

// Function Expression
// namaste()
// var namaste = function (){
//     console.log("namaste")
// }

// // Fat Arrow Function
// var namaste = ()=>{
//     console.log("namaste")
// }


// Named Function Expression
// Anonymous Function
// IIFE



// Function Declaration v/s Fat Arrow function

// function greet(){
//     console.log(arguments)
// }
// greet(1,3,4,10)


// var namaste = ()=>{
//     console.log(arguments)
// }

// namaste()


// var obj = {
//     brand: 'codekidaru',
//     func1: ()=>{
//         console.log(this.brand)
//     },
//     func2: function(){
//         console.log(this.brand)
//     }
// }

// obj.func1();
// obj.func2();

// syntax
// hoisting
// implicit return in arrow fn
// single parameter
// arguments

// function func1(){
//     return {

//     }
// }

// var func2 = () => {
//     return {
//         name: 'mkl'
//     }
// }

// console.log(func2())


// var foo = function fact(num){
//     console.log(foo === fact)
//     // if(num === 0){
//     //     return 1;
//     // }

//     // return num * fact(num - 1)
// }

// foo()


// var greet = function(){

// }

// var alpha = function(){

// }

// greet(alpha)

// function greet(a, b, c){

// }

// greet(10, 11, 12)


// let func = (function(a){
//     return function(){
//         let sum = a + 2;
//         console.log(sum)
//     }
// })(10)

// func()


if(true){
    let obj = (function(){
        var count = 0;

        return {
            increment: ()=>{
                count++;
            },
            getCount: () =>{
                return count;
            }
        }
    })()

    console.log(obj.getCount())
    obj.increment();
    console.log(obj.getCount())
}