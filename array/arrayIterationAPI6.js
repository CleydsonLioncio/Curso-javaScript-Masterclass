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
const result = frameworks.reduce(function (total, framework) {
  return total + framework.contributors;
}, 0)
console.log(result)