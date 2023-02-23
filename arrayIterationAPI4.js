const frameworks = [
  {
    name: "Angular.js",
    contributors: 1548
  },
  {
    name: "Ember.js",
    contributors: 746
  },
  {
    name: "Vue.js",
    contributors: 240
  }
];
const result = frameworks.some(function (framework) {
  return framework.name.includes("js");
});
console.log(result)