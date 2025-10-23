const myPromise = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Promise sukses");
  } else {
    reject("promise gagal");
  }
});

/* -------------------------------- dot then -------------------------------- */
myPromise
  .then((data) => {
    console.log("Hore, promise sukses"); // untuk nangkep sukses dari promise
    console.log(data);
  })
  .catch((error) => {
    console.log("Huhu, promise gagal"); // untuk nangkep error dari promise
    console.log(error);
  })
  .finally(
    () => console.log("promise finished") // selalu jalan walaupun promise sukses atau error
  );

/* ------------------------------- async await ------------------------------ */
async function handleMyPromise() {
  try {
    const data = await myPromise;
    console.log("Hore, promise sukses"); // untuk nangkep sukses dari promise
    console.log(data);
  } catch (error) {
    console.log("Huhu, promise gagal"); // untuk nangkep error dari promise
    console.log(error);
  } finally {
    console.log("promise finished"); // selalu jalan walaupun promise sukses atau error
  }
}

/* --------------------------- Real implementation -------------------------- */
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
