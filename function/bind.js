const calculateArea = function(fn) {
  return fn(Math.PI * Math.pow(this.radius, 2));
};
const circle = {
  radius: 10,
  calculateArea
};
const calculaterAreaForCircle = calculateArea.bind(circle);
console.log(calculaterAreaForCircle(Math.round));
console.log(calculaterAreaForCircle(Math.ceil));