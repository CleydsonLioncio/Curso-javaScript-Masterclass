const charsets = new Set();
charsets.add("ASCII");
charsets.add("ISO-8859-1");
charsets.add("UTF-8");
console.log(charsets.delete("ISO-8859-1"))
console.log(charsets.has("ASCII"));
console.log(charsets.has("CP-1252"));
console.log(charsets.has("ISO-8859-1"))