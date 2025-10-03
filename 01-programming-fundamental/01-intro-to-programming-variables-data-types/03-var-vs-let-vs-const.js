/* ---------------------------- var, let VS const --------------------------- */
// var dan let isinya bisa diganti
var fullName = "Purwa Hartono";
console.log(fullName);
fullName = "Bryan Hartono";

let city = "Bandung";
city = "Jakarta";
city = "Sumedang";
console.log(city);

// const isinya tidak bisa diganti
const score = 100;
// score = 5000;
console.log(score);


/* ---------------------------- var VS let, const --------------------------- */
// 1. var membuat variablenya menjadi global scope
// 2. let dan const membuat variablenya menjadi block scope
// block scope => {}

let age = 20;
console.log(age);

// console.log(gender);

{
    // scope level 1
    console.log(age);

    let gender = "Male";
    console.log(gender);

    // console.log(amail);
    
    console.log(address);

    {
        // scope level 2
        console.log(age);
        console.log(gender);

        let email = "john@gmail.com";
        console.log(email);

        var address = "Jalan Soekarno Hatta";
        console.log(address);
    }
}

console.log(address);