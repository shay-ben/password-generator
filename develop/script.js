
// List empty array
var characterLength = "";
var characters = []; 

// List array varriables 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "?"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  

function generatePassword() {
  var password = "";

//Prompts 
  var characterLength = parseInt(prompt("How many charaters do you want your password to be? Pick between 8 and 128 characters."));
    // create if statement in the case user does not pick between the length 
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Charater length must be between 8 and 128 Charaters! Please try again!"); 
      return "Click Generate Password and try again!"; 
    }
    // if user picks between the character length, then - 
    if(confirm("Would you like lowercase letters in your password?")) {
      characters = characters.concat(lowerCase);
    }
    if (confirm("Would you like uppercase letters in your password?")) {
      characters = characters.concat(upperCase);
    }
    if (confirm("Would you like numbers in your password?")) {
      characters = characters.concat(number);
    }
    if (confirm("Would you like special characters in your password?")) {
      characters = characters.concat(specialCharacters);
    }

    for(var i = 0; i < characterLength; i++) {
      var randomPassword = Math.floor(Math.random() * characters.length);
      password = password + characters[randomPassword];
    }
    return password;
}
  

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);