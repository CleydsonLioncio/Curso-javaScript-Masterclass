const calculateArea = function() {
    return this.x * this.y;
};
const rectangle = {
  x: 10,
  y: 2,
  calculateArea
};
console.log(rectangle.calculateArea());