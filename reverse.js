const sentence = "I am learning Web Dev.";
// const result = sentence.reverse();

// Solution 1
let reverse = "";
for (const letter of sentence) {
  //   console.log(letter);
  reverse = letter + reverse;
}
// console.log(reverse);

// Solution 2
let reverse2 = "";
for (let i = sentence.length - 1; i >= 0; i--) {
  //   console.log(sentence[i]);
  reverse2 += sentence[i];
  //   console.log(i);
}
console.log(reverse2);

// Solution 3
let rev3 = "";
for (let i = 0; i < sentence.length; i++) {
  const letter = sentence[i];
  rev3 = letter + rev3;
}

console.log(rev3);

// Solution 4
const reversed = sentence.split("").reverse().join("");
console.log(reversed);
