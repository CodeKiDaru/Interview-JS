console.log("Start")

setTimeout(() => {
    console.log("Callback A")
}, 0);

setTimeout(() => {
    console.log("Callback B")
}, 1000);

setTimeout(() => {
    console.log("Callback C")
}, 0);

console.log("Before End")
console.log("End")