const obj1 = {};
for (var v1 = 0; v1 < 3; v1++) {
  obj1[v1] = (function() {
      console.log(this.v2);
  }).bind({v2: v1});
}
obj1[0] ();
obj1[1] ();
obj1[2] ();