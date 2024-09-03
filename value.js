const person = {
  name: "Sodor Udddin",
  age: 45,
  profession: "Developer",
  techStack: ["Reactjs", "Nodejs", "MongoDB"],
  "fav places": ["sundarban", "khagrachori", "gopalgonj pl"],
};

// Set a value with string
person["isLearner"] = true;
console.log(person.isLearner);
// to acess string type property value
const propName = "fav places";
console.log(person[propName]);
