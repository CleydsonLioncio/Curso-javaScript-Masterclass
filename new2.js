const createPerson = function(name, city, year) {
  return {
    name,
    city,
    year,
    getAge() {
        return (new Date()).getFullYear() - this.year;
    }
  };
};
const person1 = createPerson("Linus Torvalds", "Helsinki", 1969);
const person2 = createPerson("Bill Gates", "Seattle", 1955);
console.log(person1);
console.log(person1.getAge());
console.log(person2);
console.log(person2.getAge());
