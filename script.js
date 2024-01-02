// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 // Place password character options here

 const specialCharacterOptions = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  // Special character considerations. The first element is a space. Surround quotation mark with apostrophes, apostrophe with quotation marks, and add a second backslash to the backslash character
  // There is some trickiness with the space element 

 // var password = generatePassword(); // For the moment, I have commented this out until we write the function `generatePassword()`
  var passwordText = document.querySelector("#password");
  var length = window.prompt("What is the desired length for your password? Please select a length of at least 8 characters and no more than 128 characters.");



  // Collecting and storing the character-type password criteria selections
  if (length >= 8 && length <= 128) {
    var lowercase = window.confirm("Include lowercase values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
    var uppercase = window.confirm("Include uppercase values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
    var numeric = window.confirm("Include numeric values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
    var specialCharacters = window.confirm("Include special character values in your password?" + "\n" 
     + "\n" 
     + "Special characters include: " + specialCharacterOptions.join("") + "\n" // added specialCharacterOptions.join("") to join all elements of the array into a single string without any separating characters
     + "Please note: a space, such as ' ' is also a special character" + "\n" 
     + "\n"
     + "If yes, select 'OK'; no, select 'Cancel'.");

    var criteriaValidation = window.confirm("Please confirm your password criteria:" + "\n"
    + "\n" 
    + "Password length: " + length + " characters" + "\n"
    + "Lowercase: " + lowercase + "\n"
    + "Uppercase: " + uppercase + "\n"
    + "Numeric characters: " + numeric + "\n"
    + "Special characters: " + specialCharacters);

    // May be of interest to define a passwordCriteria object with length, lowercase, uppercase, numeric, specialCharacters
      // Ideally, it would be convenient to allow users to select a criteria that they would like to change and provide a new prompt instead of requiring form completion again. May investigate adding this functionality after completion

    if (criteriaValidation) {
      // if (lowerCase OR upperCase OR numeric OR specialCharacters) // Don't need length condition because already required to enter this loop
        // Run password generator function
      // else
        // window.alert("Sorry, we were unable to generate a password for you! At least one character type must be selected.")
    } else {
      window.alert("Sorry, it seems we were not on the same page about your password criteria! Please click 'Generate Password' to reselect your criteria.");
    }
  } else {
    window.alert("Sorry, we were not able to validate the length of your password. Please select an integer between 8 and 128, inclusive.");
  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);