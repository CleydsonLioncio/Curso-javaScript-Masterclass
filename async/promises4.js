function sum(a, b) {
  return new Promise(function (resolve, reject) {
    if (!a || !b) return reject("Invalid input")  
    setTimeout(function() {
        resolve(a + b);
      }, 1000);
  });
}
console.time("performace");
Promise.all([
  sum(2 ,2),
  sum(4, 4)
]).then(function(values) {
    const [a, b] = values;
    console.log(a, b);
    return sum(a, b).then(function(result) {
      console.log(result);
      console.timeEnd("performace")
    })     
      
}).catch(function (e) {
      console.log(e);
});