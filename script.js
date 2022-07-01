var charLength;
var lowerCase;
var upperCase;
var numerals;
var specialChars;
var charSet;
var pWord;
var generateBtn = document.querySelector("#generate");

// prompt for character length 
var lengthPrompt = function () {
  charLength = prompt("Select password character length (min 8 - max 128)", "Type number here");
  charLength = Math.floor(charLength);
  if (isNaN(charLength)) {
    alert("Input must be a whole number");
    return;
  } else if (charLength < 8 || charLength > 128) {
    alert("Number must be between 8 - 128");
    return;
  } else {
    typeConfirm();
  }
}

generateBtn.addEventListener("click", lengthPrompt);

//prompts for character types
var typeConfirm = function () {
  lowerCase = confirm("Would you like to use lowercase characters? Press OK for Yes  Cancel for No");
  upperCase = confirm("Would you like to use UPPERCASE characters? Press OK for Yes  Cancel for No");
  numerals = confirm("Would you like to use numarals? i.e. 12345 Press OK for Yes  Cancel for No");
  specialChars = confirm("Would you like to use special characters? i.e. !@#$% Press OK for Yes  Cancel for No");
  if (!lowerCase && !upperCase && !numerals && !specialChars) {
    alert("You must choose at least one character type.");
    return;
  } else {//input repeated on confirm menu
    confirm("You have selected - Password Length: " + charLength + " Lowercase Letters: " + lowerCase + " Uppercase Letters: " + upperCase + " Numerals: " + numerals + " Special Characters: " + specialChars + " ...Are you ready to generate?");
  }
  writePassword();

}

// Write password to the #password input
function writePassword() {
  var password = "";
  var passwordText = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
  "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
  for (i = 1; i <= 8; i++) { 
    var char = Math.floor(Math.random() 
                * passwordText.length + 1); 
      
    password += passwordText.charAt(char) 
} 
return password;
}

passwordText.value = password;

// function gfg_Run(){generateBtn.innerHTML = fucntion writePassword()}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword());
