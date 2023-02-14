const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
  language: "English",
  available: true
};

for (let key in book) {
  console.log(book[key]);
}