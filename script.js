// Assignment Code
var generateBtn = document.querySelector("#generate");


// write passwod  to the #password input
function writePassword(); { 
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;
}
 
//  add event listener to generate button
generateBtn.addEventListener("click", writePassword);
