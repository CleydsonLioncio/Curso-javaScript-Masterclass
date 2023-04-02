const book = {
  title: "Clean Code",
  author: " Robert C. Martin",
  pages: 464,
  language: "English",
  available: true
};
console.log("title" in book);
console.log("author" in book);
console.log("pages" in book);
console.log("language" in book);
console.log("available" in book);