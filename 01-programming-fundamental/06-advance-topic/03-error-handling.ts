const myPromise = new Promise((resolve, reject) => {
  if (1 === 1) {
    resolve("Promise sukses");
  } else {
    reject("promise gagal");
  }
});

myPromise
  .then((data) => {
    console.log("Hore, promise sukses"); // untuk nangkep sukses dari promise

    throw new Error("Error yang dibuat-buat");

    console.log(data);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
  })
  .catch((error) => {
    console.log("Huhu, promise gagal"); // untuk nangkep error dari promise
    console.log(error);
  })
  .finally(
    () => console.log("promise finished") // selalu jalan walaupun promise sukses atau error
  );

/* ---------------------------------- NOTES --------------------------------- */
async function getUserData() {
  try {
    const response = await fetch("");

    if (response.ok !== true) {
      throw new Error();
    }
    console.log("Berhasil");
  } catch (error) {
    console.log(error);
  }
}
