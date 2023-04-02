const personPrototype = {
    getAge() {
      return (new Date()).getFullYear() - this.year;
    }
};

const createPerson = function(name, city, year) {
  const person = {
    name,
    city,
    year
  };
  Object.setPrototypeOf(person, personPrototype);
  return person;
};
const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.__proto__);
console.log(person1.getAge());
console.log(person2);
console.log(person2.__proto__);
console.log(person2.getAge());
console.log(person1.__proto__ === person2.__proto__)