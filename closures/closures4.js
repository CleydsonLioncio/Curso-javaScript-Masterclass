function fn1() {
  let v1 = 10;
  return {
    m1() {
      console.log(++v1);
    },
    m2() {
      console.log(--v1);
    }
  };
}
const obj1 = fn1();
obj1.m1();
obj1.m2();