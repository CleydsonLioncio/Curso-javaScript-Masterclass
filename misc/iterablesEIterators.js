const languages = ["Fortran", "Lisp", "COBOL"];
const iterator =  languages[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());