// Assignment code here

function generatePassword() {
  var passwordLength = prompt("Enter password length between 8-128");
  passwordLength = parseInt(passwordLength);
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert(
      "Password length doesn't meet criteria. Please provide a number 8 and 128"
    );
    var passwordLength = prompt("Enter password length between 8-128");
    passwordLength = parseInt(passwordLength);
  }

  //Initial empty string//
  var pswdChars = "";

  var includeLC;
  var includeUC;
  var includeNum;
  var includeSp;

  var lowerCase = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  var upperCase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  var special = ["!", "#", "$", "%", "&", "*", "+", "-", "?", "@", "^", "_"];

  function getPasswordOptions() {
    //Prompt option to use lower case//
    includeLC = confirm("Press OK to include lower case in password.");

    //Prompt option to use upper case//
    includeUC = confirm("Press OK to include upper case in password.");

    //Prompt option to use numerals//
    includeNum = confirm("Press OK to include numbers in password.");

    //Prompt option to use special characters//
    includeSp = confirm(
      "Press OK to include special characters (!,#,$,%,&,_,*,+,-,?,@,^,) in password."
    );
  }

  getPasswordOptions();

  //Alert if no options are selected//
  while (!includeLC && !includeUC && !includeNum && !includeSp) {
    alert("At least one character type must be selected. Please start again.");
    getPasswordOptions();
  }

  var collections = [];

  if (includeLC) {
    collections.push(lowerCase);
  }
  if (includeUC) {
    collections.push(upperCase);
  }
  if (includeNum) {
    collections.push(numbers);
  }
  if (includeSp) {
    collections.push(special);
  }

  // per tutor, use for loop as many times as the password length. Why? does this randomize?//
  for (var i = 0; i < passwordLength; i++) {
    // get random collection
    var collectionIndex = Math.floor(Math.random() * collections.length);
    var collection = collections[collectionIndex];

    // get random character in that collection
    var characterIndex = Math.floor(Math.random() * collection.length);
    var character = collection[characterIndex]; // for example "A"

    // append this character to password
    pswdChars += character; // same as pswdChars = pswdChars + "A"
  }
  return pswdChars;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
