const wm1 = new WeakMap();
const obj1 = {};
const obj2 = {};
wm1.set(obj1, "obj1");
wm1.set(obj2, "obj2");
console.log(wm1)
console.log(wm1.has(obj1));
console.log(wm1.has(obj2));