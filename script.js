// Assignment code here

function generatePassword(){
  var passwordLength = prompt("Enter password length between 8-128"); 
  passwordLength= parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert ("Password length doesn't meet criteria. Please provide a number 8 and 128");
    generatePassword();
  }
  console.log ("Password length = ", passwordLength);
  var pswdChars = ""; 
  //initial empty string//

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var includeLC = confirm ("Press OK to include lower case in password.");
  if (includeLC) {
    pswdChars += lowerCase;
    console.log ("pswdChars = ", pswdChars);
  }

  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var includeUC = confirm ("Press OK to include upper case in password.");
  if (includeUC) {
    pswdChars += upperCase;
    console.log ("pswdChars = ", pswdChars);
  }

  var numbers = "0123456789";
  var includeNum = confirm ("Press OK to include numbers in password.");
  if (includeNum) {
    pswdChars += numbers;
    console.log ("pswdChars = ", pswdChars);
  }

  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var includeSp = confirm ("Press OK to include special characters in password.");
  if (includeSp) {
    pswdChars += special;
    console.log ("pswdChars = ", pswdChars);
  }
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


/* My thoughts on code below. Just brainstorming here. I think we need the following. Not clear on specifics*/
/* do var as array or string?*/
// var pswdChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// var length = 12 /*Arbitrary # I picked for length of password*/

// var index = Math.floor(Math.random() * pswdChars.length);
// var computerChoice = pswdChars[index];

// /* Do we prompt user for each type of input or use computerChoice to generate from letters/numbers/special characters?*/
// window.prompt("Click to generate a secure password.");

// window.alert("Your new password is" + computerChoice);

// document.getElementById
