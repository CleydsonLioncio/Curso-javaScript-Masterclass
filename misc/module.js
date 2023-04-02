const PI = 3.141592;
function pow (base, exponetial) {
  if (exponential === 0) return 1;
  return base * pow( base, exponetial - 1)
}
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return PI * Math.pow(this.radius, 2)
  }
}
const circle = new Circle(10);
console.log(circle);
console.log(circle.area)