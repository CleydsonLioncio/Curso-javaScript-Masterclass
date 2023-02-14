const v1 = 10;
function fn1() {
  function fn2 () {
    console.log(v1);
  }
  fn2();
}
fn1();