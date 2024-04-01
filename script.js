//! spread operator = ... allow an iterable such as an
//!                   array or string to b expanded
//!                   into seperate elements
//?                   (unpacks the elements)


// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);

// let username = "Linkx Mere";
// let letters = [...username].join("-");

// console.log(letters);

let fruits = ["apple", "orange", "banana"];
let veges = ["carrots", "celery", "potatoes"]

let foods = [...fruits, ...veges, "eggs", "milk"]

console.log(foods);