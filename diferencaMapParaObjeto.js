const obj = {};
obj[10] = "Number";
obj["10"] = "String";
obj[true] = "Bolean";
obj["true"] = "String";
console.log(obj[10]);
console.log(obj["10"]);
console.log(obj[true]);
console.log(obj["true"]);

// o objetro transcreve o próximo valor para ser o atual.

const map = new Map();
map.set(10, "Number");
map.set("10", "String");
map.set(true, "Bolean");
map.set("true", "string");
console.log(map.get(10));
console.log(map.get("10"));
console.log(map.get(true));
console.log(map.get("true"));

// o map já não transcreve o valor de cima com o valor de baixo.