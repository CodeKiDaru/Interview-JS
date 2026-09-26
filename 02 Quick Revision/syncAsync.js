console.log("first line");

(async ()=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(response)
})()

console.log("third line")