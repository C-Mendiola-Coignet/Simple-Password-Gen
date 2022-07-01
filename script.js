// Assignment Code
var generateBtn = document.querySelector("#generate");

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

// passwordText.value = password;

// function gfg_Run(){generateBtn.innerHTML = fucntion writePassword()}
// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword());
