/* -------------------------------------------------------------------------- */
/*                               CARA KAK BAGAS                               */
/* -------------------------------------------------------------------------- */

class Student {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

class StudentOperations {
  mergeArrays(list1: Student[], list2: Student[]) {
    let merged: Student[] = [];

    for (let i: number = 0; i < list1.length; i++) {
      merged.push(list1[i] as Student);

      let exist = false;

      for (let j: number = 0; j < merged.length; j++) {
        if (list2[i]?.email === merged[j]?.email) {
          exist = true;
        }
      }
      if (!exist) {
        merged.push(list2[i] as Student);
      }
    }
    return merged;
  }
}

let list1: Student[] = [
  new Student("Student 1", "student1@mail.com"),
  new Student("Student 2", "student2@mail.com"),
];

let list2: Student[] = [
  new Student("Student 1", "student1@mail.com"),
  new Student("Student 3", "student3@mail.com"),
];

let merged = new StudentOperations();
let result = merged.mergeArrays(list1, list2);
console.log(result);

/* -------------------------------------------------------------------------- */
/*                               CARA KAK NADHIF                              */
/* -------------------------------------------------------------------------- */
