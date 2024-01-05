// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  // Place password character options here
  const lowercaseCharacterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseCharacterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numericCharacterOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const specialCharacterOptions = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
    // Special character considerations. The first element is a space. Surround quotation mark with apostrophes, apostrophe with quotation marks, and add a second backslash to the backslash character
    // There is some trickiness with the space element 

  // Prompts to gather password criteria from users
  var length = window.prompt("What is the desired length for your password? Please select a length of at least 8 characters and no more than 128 characters.");
  var lowercase = window.confirm("Include lowercase values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
  var uppercase = window.confirm("Include uppercase values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
  var numeric = window.confirm("Include numeric values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
  var specialCharacters = window.confirm("Include special character values in your password?" + "\n" 
   + "\n" 
   + "Special characters include: " + specialCharacterOptions.join("") + "\n" // added specialCharacterOptions.join("") to join all elements of the array into a single string without any separating characters
   + "Please note: a space, such as ' ' is also a special character" + "\n" 
   + "\n"
   + "If yes, select 'OK'; no, select 'Cancel'.");

   // Ask users to confirm their password criteria choices.
   var criteriaConfirmation = window.confirm("Please confirm your password criteria:" + "\n"
    + "\n" 
    + "Password length: " + length + " characters" + "\n"
    + "Lowercase characters: " + lowercase + "\n"
    + "Uppercase characters: " + uppercase + "\n"
    + "Numeric characters: " + numeric + "\n"
    + "Special characters: " + specialCharacters);


  // Once a participant has confirmed their selection, validate that they have an appropriate password length and have selected at least one character type   
  if (criteriaConfirmation) {
    if ((length >= 8 && length <= 128) && (lowercase || uppercase || numeric || specialCharacters)) {
      // Run password generator function
      var password = generatePassword(); // The returned value will be assigned to `password`
    } else {
      window.alert("Sorry, we were unable to generate a password for you! Please ensure you have selected a password length of at least 8 and no more than 128, and at least one character type.")
    }
  }
  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Declare generatePassword function
  function generatePassword () {
    // Define an array with available character options based on user's selected criteria
    selectedUserOptions = []
    if (numeric) {
      selectedUserOptions = selectedUserOptions.concat(numericCharacterOptions);
    }

    if (lowercase) {
      selectedUserOptions = selectedUserOptions.concat(lowercaseCharacterOptions);
    }

    if (uppercase) {
      selectedUserOptions = selectedUserOptions.concat(uppercaseCharacterOptions);
    }

    if (specialCharacters) {
      selectedUserOptions = selectedUserOptions.concat(specialCharacterOptions);
    }

    // Declare local password string and randomly generate values
    var passwordString = "";

    for (let i = 0; i < length; i++) {
      passwordString += selectedUserOptions[Math.floor(Math.random() * selectedUserOptions.length)]; // Serves same function as passwordString = passwordString + random
    }

    return passwordString;
  }

}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
