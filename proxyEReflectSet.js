function createArray() {
  return new Proxy ({}, {
    set(target, key, value) {
      target.length = target.length || 0
      target.length++;
      target[key] = value;
    }
  });
}
const languages = createArray();
languages[0] = "Python";
languages[1] = "Ruby";
languages[2] = "JavaScript";
console.log(languages);
console.log(languages.length);