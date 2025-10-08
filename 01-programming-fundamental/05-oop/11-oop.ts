/* -------------------------------------------------------------------------- */
/*                                     OOP                                    */
/* -------------------------------------------------------------------------- */
// 1. Inheritance
// 2. Encapsulation
// 3. Abstraction
// 4. Polymorphism

/* -------------------------------------------------------------------------- */
/*                                 INHERITANCE                                */
/* -------------------------------------------------------------------------- */
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }

  eat() {
    return `${this.name} is eating`;
  }
}

class Dog extends Animal {
  isTrained: boolean;

  constructor(name: string, isTrained: boolean) {
    super(name);
    this.isTrained = isTrained;
  }

  bark() {
    return `${this.name} says: Woof!`;
  }
}

class Cat extends Animal {
  meow() {
    return `${this.name} says: Meow!`;
  }
}

const joni = new Dog("Joni", true);
console.log(joni.name);
console.log(joni.isTrained);
console.log(joni.bark());
console.log(joni.eat());

const maul = new Cat("Maul");
console.log(maul.meow());
console.log(maul.eat());

/* -------------------------------------------------------------------------- */
/*                                ENCAPSULATION                               */
/* -------------------------------------------------------------------------- */
class BankAccount {
  owner: string; // public
  balance: number; // public
  #nik: number; // private
  static address: string = "indonesia"; // static

  constructor(owner: string, balance: number, nik: number) {
    this.owner = owner;
    this.balance = balance;
    this.#nik = nik;
  }

  get maskedNik() {
    const nikString = this.#nik.toString();
    const censoredNik = nikString.slice(-5).padStart(nikString.length, "*");
    return censoredNik;
  }

  set updateNik(newNik: number) {
    if (String(newNik).length === 16) {
      this.#nik = newNik;
    }
  }
}

const tono = new BankAccount("Tono", 50_000, 3209423094712345);
const slamet = new BankAccount("slamet", 100_000_000, 3209423194712435);

// 1. Public method/property - Semua orang bisa akses dan edit
console.log(tono);
tono.balance = 100_000;
console.log(tono);

// 2. Private method/property - Tidak semua orang bisa akses dan edit
// console.log(tono.nik);

/* ----------------------------- Getter & Setter ---------------------------- */
// Cara safety untuk mengakses dan mengedit private property
// 1. Getter
console.log(tono.maskedNik);
console.log(slamet.maskedNik);

// 2. Setter
tono.updateNik = 3209423094754321;
console.log(tono.maskedNik);

tono.updateNik = 3209423094753222;
console.log(tono.maskedNik);

/* --------------------------------- Static --------------------------------- */
console.log(BankAccount.address);

/* -------------------------------------------------------------------------- */
/*                                 INSTANCEOF                                 */
/* -------------------------------------------------------------------------- */
// Review typeof
console.log(typeof 10);
console.log(typeof null);
console.log(typeof undefined);

//instanceof
console.log(tono instanceof BankAccount);
console.log(tono instanceof Animal);

/* -------------------------------------------------------------------------- */
/*                                    NOTES                                   */
/* -------------------------------------------------------------------------- */
// Instance => sebuah object yang dibuat dari sebuah kelas
