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

//Function- generate password
function generatePassword() {

  //Character options
  var capitalChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  //Empty array for future password use
  var newCapChar = [];
  var newLowChar = [];
  var newNumChar = [];
  var newSpecChar = [];
  var passResult = [];
  var newPassResult = [];

  //Password length
  var passwordLength = prompt("How many characters would you like your password to be? This must be a number between 8 and 128.");

  //Confirm password length is within parameters
  if (passwordLength < 8 || passwordLength > 128){
    alert("Password must be between 8-128 characters.");
    return generatePassword();
  }

  //Password character selectors
  else {
    var passwordCapital = confirm("Do you want capital letters included in your password? Click OK for yes and cancel for no.");
    var passwordLower = confirm("Do you want lowercase letters included in your password? OK for yes and cancel for no.");
    var passwordNumber = confirm("Do you want numbers in your password? OK for yes and cancel for no.");
    var passwordSpecChar = confirm("Do you want special characters in your password? OK for yes and cancel for no.");
  }

  //Console logging to check results of confirmation (for my own curiosity- not necessary I don't think)
  console.log(passwordCapital, passwordLower, passwordNumber, passwordSpecChar);

  //Making the password using the selector results

  //if capital characters were chosen
  if (passwordCapital === true){
    for (i = 0; i < passwordLength; i++){ //Making it the right length
      var ranCap = Math.floor(Math.random() * capitalChar.length);  //this randomizes the characters
      newCapChar.push(capitalChar[ranCap]); //Inserting the random characters into the empty array
      passResult.push(newCapChar); //Inserting the random characters into the final password result
    }
  }

  //if lowercase characters were chosen
  if (passwordLower === true){
    for (i = 0; i < passwordLength; i++){
      var ranLow = Math.floor(Math.random() * lowerChar.length);
      newLowChar.push(lowerChar[ranLow]);
      passResult.push(newLowChar);
    }
  }

  //if number characters were chosen
  if (passwordNumber === true){
    for (i = 0; i < passwordLength; i++){
      var ranNum = Math.floor(Math.random() * numberChar.length);
      newNumChar.push(numberChar[ranNum]);
      passResult.push(newNumChar);
    }
  }

  //if special characters were chosen
  if (passwordSpecChar === true){
    for (i = 0; i < passwordLength; i++){
      var ranSpecChar = Math.floor(Math.random() * specialChar.length);
      newSpecChar.push(specialChar[ranSpecChar]);
      passResult.push(newSpecChar);
    }
  }

  for (i = 0; i < passwordLength; i++){ //This makes the password the right length
    var ranPass = Math.floor(Math.random() * passResult.length); //Randomizing...
    var ranIndex = Math.floor(Math.random() * passwordLength); //Randomizing...
    newPassResult.push(passResult[ranPass][ranIndex]); //Creating the password result with all the chosen characters
  }

  //Post result in the "Your Secure Password Will Appear Here" box
  return newPassResult.join("");
}