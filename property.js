const person = {
  name: "Sodor Udddin",
  age: 45,
  profession: "Developer",
  techStack: ["Reactjs", "Nodejs", "MongoDB"],
};

// We can get property in 2 ways
// dot notation
// array/third bracket notation

console.log(person.name);
console.log(person.age);
console.log(person.profession);
console.log(person["profession"]);
