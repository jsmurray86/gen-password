// Assignment code here


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
var pswdChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

var length = 12 /*Arbitrary # I picked for length of password*/

var index = Math.floor(Math.random() * pswdChars.length);
var computerChoice = pswdChars[index];

/* Do we prompt user for each type of input or use computerChoice to generate from letters/numbers/special characters?*/
window.prompt("Click to generate a secure password.");

window.alert("Your new password is" + computerChoice);

document.getElementById
