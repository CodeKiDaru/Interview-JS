console.log("Start")

function alpha() {
    console.log("alpha")
    beta();
}

function beta() {
    console.log("alpha")
}

beta();
console.log("END")