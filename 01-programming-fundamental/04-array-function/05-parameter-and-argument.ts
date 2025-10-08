/* -------------------------------------------------------------------------- */
/*                              DEFAULT PARAMETER                             */
/* -------------------------------------------------------------------------- */
function multiplyByN(num: number, n: number = 2) {
  const result = num * n;
  return result;
}

console.log(multiplyByN(10, 5));
console.log(multiplyByN(10));
console.log(multiplyByN(1));

/* -------------------------------------------------------------------------- */
/*                               REST PARAMETER                               */
/* -------------------------------------------------------------------------- */
/* -------------------------------- contoh 1 -------------------------------- */
// Kalau ingin membuat parameter tak terhingga
function sumAll(num1: number, ...rest: number[]) {
  let restTotal = 0;

  for (let i = 0; i < rest.length; i++) {
    restTotal = restTotal + rest[i];
  }

  return num1 + restTotal;
}

console.log(sumAll(10, 20, 30, 40, 50));

/* -------------------------------- contoh 2 -------------------------------- */
// getLastArgument(1, 2, 3, 4) => 4
// getLastArgument(1, 2, 3) => 3
// getLastArgument(1, 2 => 2

function getLastArgument(...restParams: number[]) {
  return restParams[restParams.length - 1];
}

console.log(getLastArgument(10, 20, 30, 40));
console.log(getLastArgument(2, 5, 8, 34));

/* ------------------------------- Loop Array ------------------------------- */
const scores = [5, 10, 25, 100];
console.log(scores.length);

let totalScores = 0;

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

/* -------------------------- Function as argument -------------------------- */
function calculateTax(salary: number, taxPercentage: number) {
  return salary * taxPercentage;
}

function showTax(
  calculateTaxFunc: (salary: number, taxPercentage: number) => {},
  name: string,
  salary: number,
  taxPercentage: number
) {
  const tax = calculateTaxFunc(salary, taxPercentage);
  return name + " your tax is " + tax;
}

console.log(showTax(calculateTax, "Adi", 5000, 10 / 100));

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
function sayHello() {
  return "Hello";
}
console.log(sayHello());

function sayHi(name: string) {
  return "Hi" + " " + name;
}
console.log(sayHi("Andi"));
