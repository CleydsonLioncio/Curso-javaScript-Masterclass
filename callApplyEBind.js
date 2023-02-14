const circle = {
  radius: 10,
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
};
console.log(circle.calculateArea());