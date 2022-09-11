// == Classes == //

// old version:
class Human {
  constructor() {
    this.gender = "male";
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person extends Human {
  constructor() {
    super(); // Human constractor
    this.name = "Ali";
  }
  printName() {
    console.log(this.name);
  }
}

const myPerson = new Person();
console.log("<start> old version:");
myPerson.printGender();
myPerson.printName();
console.log("<end> old version\n==========");

// new version(ES6/babel):

class HumanNew {
  gender = "Male";

  // arrow function:
  printGender = () => {
    console.log(this.gender);
  };
}

class PersonNew extends HumanNew {
  name = "Amirali";

  // arrow function:
  printName = () => {
    console.log(this.name);
  };
}

const myPersonNew = new PersonNew();
console.log("<start> new version:");
myPersonNew.printGender();
myPersonNew.printName();
console.log("<end> new version\n==========");
