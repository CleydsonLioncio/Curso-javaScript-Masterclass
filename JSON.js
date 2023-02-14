const book1 = {
  name: "Refatoring",
  author: "Martin Fowler"
};
const book2 = {
  name: "Refatoring",
  author: "Martin Fowler"
}
console.log(book1 === book2);
console.log(JSON.stringify(book1) === JSON.stringify(book2))