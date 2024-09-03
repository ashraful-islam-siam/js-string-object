const address = "andorKila";

const part = address.slice(5, 9);
console.log(part);

const sentence = "I am a good and hardworking person";
console.log(sentence.split());
console.log(sentence.split(""));
console.log(sentence.split(" "));
console.log(sentence.split("a"));

const friendStr = "Rahim, Karim, Salauddin, Shafique, Salam";
console.log(friendStr.split(","));

const friendArr = ["Rahim", " Karim", " Salauddin", " Shafique", " Salam"];
console.log(friendArr.join(","));
