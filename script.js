// Assignment Code
var generateBtn = document.querySelector("#generate");
// create 4 variables that store all our character types
// put all characters in string, use .split method

// to create a  generatePassword function that will return us our password

function generatePassword() {
    var userInput = window.prompt("How long do you want your password to be?")
    var passwordLength = parseInt(userInput)

    if (isNaN(passwordLength)){
      window.alert("that's not a number!")
      return

    } 
    if (passwordLength < 8 || passwordLength > 128){
      window.alert("password length must be betweeen 8 and 128 characters")
    }
    var userWantsNumbers = window.confirm("would you like to include numbers in you password?")
    var userWantsSymbols = window.confirm("would you like to include symbols in you password?")
    var userWantsLowercase = window.confirm("would you like to include letters in you password?")
    var userWantsUppercase = window.confirm("would you like to include letters in you password?")

  

    
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

