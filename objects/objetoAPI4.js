const javascript = {
  name: "JavaScript",
  year: 1995,
  paradigm: "OO and Functional"
};
Object.freeze(javascript);
javascript.name = "ECMAScript";
console.log(javascript);
console.log(Object.isExtensible(javascript));
console.log(Object.isSealed(javascript));
console.log(Object.isFrozen(javascript));