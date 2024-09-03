const school = "Kashemganj High School";
console.log(school);
console.log(school.toLowerCase());
console.log(school.toUpperCase());
// uppercase: ABCDF
// lowercase: abcdf

const subject = "Chemistry";
const book = "chemistry";

if (subject.toLowerCase() === book.toLowerCase()) {
  console.log("I am reading book eibar poikkhay faatai felmu");
} else {
  console.log("hudai prista ultai vat khawar jonno");
}

const drink = "  water ";
const liquid = "  water  ";

if (drink.trim() === liquid.trim()) {
  console.log("panir opor nam jibon");
} else {
  console.log("somudre pani ase khaite parina");
}
