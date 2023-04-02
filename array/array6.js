const languages = ["Python", "C", "Java"];
console.log(languages);
console.log(languages.splice(1, 1));
console.log(languages.splice(1, 0, "C++", "C#"));
console.log(languages.splice(1, 2, "C"));
console.log(languages);