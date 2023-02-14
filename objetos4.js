const book = {
  title: "Clean Code",
  author: " Robert C. Martin",
  pages: 464,
  language: "English",
  available: true
};
delete book.available;
console.log(book);