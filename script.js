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
