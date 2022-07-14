// List array varriables 
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "?"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = lowerCase.map(element => {
   return element.toUpperCase(); 
  }); 
console.log(upperCase)

// List empty arrays 
var characterLength = []; 
var characters = []; 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  // to write a password your prompt must be either true or false 
   prompts(); 

   // if the prompts are given correctly you can generate a password 
    if(prompts) {
      var newPassword = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = newPassword;
    }
}


function generatePassword() {
  var password = ""; 
  // create a loop for how ever long the character length based on user input 
  for (var i = 0; i < characterLength; i++) {
    var randomCharacter = math.floor(math.random() * characters.length); 
    password = password + characters[randomCharacter]; 
  }
  return password;
  // after this does a looop of users character length and random characters, this will return back to password - line 28 to generate a password 
}

//Prompts 
function prompts() { 
  characters = [];

  characterLength = parseInt(prompt("How many charaters do you want your password to be? Pick between 8 and 128 characters."));
    // create if statement in the case user does not pick between the length 
    if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
      alert("Charater length must be between 8 and 128 Charaters. Please try again."); 
      return false; 
    }
    // if user picks between the character length, then - 
    if(confirm("would you like lowercase letters in your password?")) {
      characters = characters.concat(lowerCase);
    }
    if (confirm("would you like uppercase letters in your password?")) {
      characters = characters.concat(upperCase);
    }
    if (confirm("would you like numbers in your password?")) {
      characters = characters.concat(number);
    }
    if (confirm("would you like speacial characters in your password?")) {
      characters = characters.concat(specialCharacters);
    }
    return true; 
}


