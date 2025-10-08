/* --------------------------------- AND && --------------------------------- */
// condition 1 && condition 2
// AND && => hanya akan bernilai benar kalau kondisi benar
// T && T => T
// F && T => F
// T && F => F
// F && F => F
console.log(10 === 10 && 10 > 5);
console.log(10 === 10 && 10 > 50);
console.log(10 === 100 && 10 > 5);
console.log(10 === 100 && 10 > 50);

/* ---------------------------------- OR || --------------------------------- */
// condition 1 || condition 2
// Hanya akan bernilai salah kalau kedua kondisi salah
// T || T => T
// F || T => T
// T || F => T
// F || F => F
console.log(10 === 10 || 10 > 5);
console.log(10 === 10 || 10 > 50);
console.log(10 === 100 || 10 > 5);
console.log(10 === 100 || 10 > 50);

/* ---------------------------------- NOT (Negasi) ! --------------------------------- */
// !condition
// Dia akan memberikan value opposite dari sebuah value
console.log(!true);
console.log(!Boolean("hello"));
console.log(!"world");
console.log(!null);

