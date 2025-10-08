/* -------------------------------------------------------------------------- */
/*                                    JOIN                                    */
/* -------------------------------------------------------------------------- */
const arrayOfFruits = ["Apple", "Banana", "Grape", "Watermelon"];
console.log(arrayOfFruits.join());
console.log();

/* -------------------------------------------------------------------------- */
/*                                    PUSH                                    */
/* -------------------------------------------------------------------------- */
// menambah element baru di akhir array
const employeeNames = ["Joko", "Pinurbo", "Anthony"];
console.log(employeeNames);
console.log(employeeNames.push("Brian"));
console.log(employeeNames);

/* -------------------------------------------------------------------------- */
/*                                     POP                                    */
/* -------------------------------------------------------------------------- */
// Menghapus element di akhir array
const citizens = ["Dadang", "Mamad", "Bejo", "Sutejo"];
console.log(citizens);
console.log(citizens.pop());
console.log();

/* -------------------------------------------------------------------------- */
/*                                   SPLICE                                   */
/* -------------------------------------------------------------------------- */
// Memotong / mengganti isi sebuah array - CUT
// Array original akan terpengaruh
/*
Array.splice(start) => Potong dari start sampai akhir
Array.splice(start, deleteCount) => Potong dari start sampai jumlah delet terpenuhi
Array.splice(start, deleteCount, item1, item2, ..., itemN)
*/
const fruits = ["Banana", "Apple", "Avocado", "Watermelon", "Orange"];

console.log(fruits.splice(2, 2));
console.log(fruits);

/* -------------------------------------------------------------------------- */
/*                                    SLICE                                   */
/* -------------------------------------------------------------------------- */
// Mengambil isi sebuah array - COPY
// Array original aman
/*
Array.slice(start)
Array.slice(start, end)
*/

const names = ["Andhika", "Galih", "Ratna", "Soraya", "Angeline"];
console.log(names.slice(2, 4));
console.log(names);

/* -------------------------------------------------------------------------- */
/*                                   INDEXOF                                   */
/* -------------------------------------------------------------------------- */

const employees = [
  "Andi",
  "Budi",
  "Citra",
  "Dewi",
  "Eka",
  "Farhan",
  "Gilang",
  "Hendra",
  "Indah",
  "Joko",
  "Kartika",
  "Lestari",
  "Mahmud",
  "Nadia",
  "Oka",
  "Putri",
  "Qori",
  "Rizki",
  "Sinta",
  "Taufik",
  "Umar",
  "Vina",
  "Wahyu",
  "Xavier",
  "Yanti",
  "Zaki",
  "Agus",
  "Bella",
  "Cahya",
  "Dani",
  "Erlangga",
  "Fina",
  "Gema",
  "Hari",
  "Intan",
  "Jihan",
  "Kusuma",
  "Lina",
  "Maya",
  "Nurul",
  "Omar",
  "Puspita",
  "Qomar",
  "Rani",
  "Sigit",
  "Tasya",
  "Utami",
  "Vicky",
  "Wulan",
  "Xenia",
  "Yoga",
  "Zahra",
  "Ardi",
  "Bagus",
  "Clara",
  "Darma",
  "Elisa",
  "Fajar",
  "Galih",
  "Hafidz",
  "Irma",
  "Jamil",
  "Kania",
  "Lukman",
  "Mega",
  "Niko",
  "Olivia",
  "Prasetyo",
  "Qania",
  "Rama",
  "Silvi",
  "Tirta",
  "Usman",
  "Vera",
  "Wawan",
  "Xander",
  "Yusuf",
  "Zara",
  "Anita",
  "Bayu",
  "Cindy",
  "Dimas",
  "Evan",
  "Febri",
  "Gina",
  "Hasan",
  "Ika",
  "Jefri",
  "Kevin",
  "Laila",
  "Miko",
  "Nabila",
  "Oscar",
  "Purnama",
  "Qais",
  "Rahma",
  "Sari",
  "Toni",
  "Uci",
  "Valen",
];

console.log(employees.indexOf("Evan"));
console.log(employees.indexOf("Andi"));

/* -------------------------------------------------------------------------- */
/*                                 LASTINDEXOF                                */
/* -------------------------------------------------------------------------- */
const cities = [
  "Jakarta",
  "Bandung",
  "Yogyakarta",
  "Tegal",
  "Jakarta",
  "Tegal",
  "Bandung",
];

console.log(cities.indexOf("Jakarta"));
console.log(cities.lastIndexOf("Jakarta"));

/* -------------------------------------------------------------------------- */
/*                                    SORT                                    */
/* -------------------------------------------------------------------------- */
const points = [10, 2, 7, 9, -1, -5, 100, 3];
console.log(points.sort());
console.log(
  points.sort((a, b) => {
    return a - b;
  })
);

// LOOP 1
// a = 10 (index 0)
// b = 2 (index 1)
//return 10 - 2 = (posotive)
// [2, 10, 7]

// LOOP 2
// a = 10 (index 1)
// b = 7 (index 2)
//return 10 - 2 = (posotive)
// [2, 10, 7]

// LOOP 3
// a = 10 (index 2)
// b = undefined (index 3)
//return 10 - 2 = (posotive)
// [2, 10, 7]

const students = [
  "Joko Widodo",
  "Susilo Bambang",
  "B.J Habibie",
  "Prabowo Subianto",
];
console.log(students.sort());

/* -------------------------------------------------------------------------- */
/*                                   REVERSE                                  */
/* -------------------------------------------------------------------------- */
const string = "KASUR";
const stringArray = string.split("");
console.log(stringArray.reverse());

const randomArray = [false, undefined, "Hello", 1, 2, 3];
console.log(randomArray.reverse());

/* -------------------------------------------------------------------------- */
/*                                     MAP                                    */
/* -------------------------------------------------------------------------- */
const ages = [19, 14, 25, 28, 23, 25];
console.log(
  ages.map((element, index) => {
    return element + 10;
  })
);

// LOOP 1
// newArray = []
// element = 19
// index = 0
// return element + 10 = 19 + 10 = 29
// newArray = [29]

// LOOP 2
// newArray = [29]
// element = 14
// index = 1
// return element + 10 = 14 + 10 = 24
// newArray = [29, 24]

// LOOP 3
// new Array = [29, 24]
// element 25
// index = 2
// return element + 10 = 25 + 10 = 35
// newArray = [29, 24, 35]

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
const fruitsArray = ["Apple", "Banana", "Cherry", "Date", "Watermelon"];

function fruitsString(fruits: string[]) {
  const lastFruits = "and " + fruits[fruits.length - 1];
  fruits.splice(fruits.length - 1, 1, lastFruits);
  const fruitsString = fruits.join(", ");

  return fruitsString;
}

console.log(fruitsString(fruitsArray));
