class Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const sunlight = new Product("Sunlight", 4000);
const apple = new Product("Apple", 28000);
const banana = new Product("Banana", 15000);
const chocolate = new Product("Chocolate", 20000);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
//Reduce
const scores = [5, 4, 3];
const totalScores = scores.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalScores);

// LOOP 1
// acc = 0
// curr = 5 (index 0)
// return acc + curr => 0 + 5 = 5

// LOOP 2
// acc = 5
// curr = 4 (index 1)
// return acc + curr => 4 + 5 = 9

// LOOP 3
// acc = 9
// curr = 9 (index 2)
// return acc + curr => 9 + 3 = 12

const product = [
  { product: { name: "chocolate", price: 10 }, quantity: 5 },
  { product: { name: "banana", price: 50 }, quantity: 1 },
  { product: { name: "chocolate", price: 25 }, quantity: 10 },
];

const total = 0;
