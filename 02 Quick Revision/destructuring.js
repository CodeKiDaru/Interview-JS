// let userObject = {
//     "full name": "manas kumar lal",
//     "married status": false
// }

// let {"full name": name, "married status": status} = userObject

// // console.log(userObject["full name"])
// console.log(name)


// let obj = {
//     name: 'alpha',
//     roll: 2020
// }

// let {name, roll} = obj;

// console.log(name, roll)

let arr = ['manas','muskan','mehek','rohan','rahul','chahat'];

// let [a, b] = arr;
// console.log(a, b)

let [firstUser, ...others] = arr;
console.log(firstUser)
console.log(others)