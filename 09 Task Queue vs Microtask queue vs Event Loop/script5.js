console.log("Start")

setTimeout(() => {
    console.log("Callback B")
}, 0);

Promise.resolve().then(() => {
    console.log("promise A")
})

console.log("End")
