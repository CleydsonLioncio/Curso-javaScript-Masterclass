const functionalLanguage = {
  paradigm: "Functional"
};
const scheme = {
  name: "Scheme",
  year: 1975,
  __proto__: functionalLanguage
};
const javascript = {
  name: "JavaScript",
  year: 1995,
  __proto__: functionalLanguage
};
Object.setPrototypeOf(javascript, functionalLanguage)
for( let key in scheme) {
console.log(key, scheme.hasOwnProperty(key));
};
/*  esse hasOwnProperty vai acessar se tem todos elementos no objeto,
 e o paradgma não tem pois está nele um prototipo */