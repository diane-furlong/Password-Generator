// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Function JS code
function generatePassword() {

  //Password length
  var passwordLength = prompt("How many characters would you like your password to be? This must be a number between 5 and 20.");
    if (passwordLength < 5 || passwordLength > 20){
      alert("Password must be between 5-20 characters.");
      return generatePassword();
    }

    //Password characters selectors

    else {
      var capitalChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
      var passwordCapital = confirm("Do you want capital letters included in your password? Click OK for yes and cancel for no.");

      var lowerChar = ["abcdefghijklmnopqrstuvwxyz"];
      var passwordLower = confirm("Do you want lowercase letters included in your password? OK for yes and cancel for no.");

      var numberChar = ["1234567890"];
      var passwordNumber = confirm("Do you want numbers in your password? OK for yes and cancel for no.");

      var specialChar = ["!@#$%^&*()"];
      var passwordNumber = confirm("Do you want special characters in your password? OK for yes and cancel for no.");
    }


    for (i=0; i < passwordLength; i++){
      //math stuff
    }
}