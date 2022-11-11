// Assignment Code
var generateBtn = document.querySelector("#generate");
// create 4 variables that store all our character types
// put all characters in string, use .split method
function randomInt(min, max) {
  if (!max){
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 -rand) + rand*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}
// to create a  generatePassword function that will return us our password

function generatePassword() {

  while ( true) {
     var userInput = window.prompt("How long do you want your password to be?")
     if (userInput === null) {
     return
  }
  var passwordLength = parseInt(userInput)

  if (isNaN(passwordLength)) {
    window.alert("that's not a number!")

  } else if (passwordLength < 8 || passwordLength > 128 ) {
    window.alert("invalid password length. length should be between 8 128 characters.")
  } else {
    break
  }
}
  
  var userWantsNumbers = window.confirm("would you like to include numbers in you password?")
  var userWantsSymbols = window.confirm("would you like to include symbols in you password?")
  var userWantsLowercase = window.confirm("would you like to include lowercase letters in you password?")
  var userWantsUppercase = window.confirm("would you like to include uppercase letters in you password?")

var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"< "(", ")", "-", "_", "=", "+"]
var lowercaseLIst = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercaselist = []

var optionCart = []

for (var i = 0; i < lowercaseLIst.length; i++) {
  uppercaselist[i] = lowercaseLIst[i].toUpperCase()
}
if (userWantsNumbers === true) {
  optionCart.push(numberList)
}
if (userWantsSymbols === true) {
  optionCart.push(symbolList)

}
if (userWantsLowercase === true) {
  optionCart.push(lowercaseLIst)
}
if (userWantsUppercase === true) {
  optionCart.push(uppercaselist)
}
if (optionCart.length === 0) {
  optionCart.push(lowercaseLIst)
}

var generatePassword = ""

for (var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionCart)
  var randomChar = getRandomItem(randomList)
  generatePassword += randomChar

}

return generatePassword

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {

  passwordText.value = password;
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

