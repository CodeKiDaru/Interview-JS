console.log("Start")

setTimeout(() => {
    console.log("Callback A")
}, 3000);

setTimeout(() => {
    console.log("Callback B")
}, 0);

Promise.resolve().then(() => {
    console.log("promise A")
})

Promise.resolve().then(() => {
    console.log("promise B")
})

console.log("End")