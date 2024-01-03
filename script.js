// Assignment Code
var generateBtn = document.querySelector("#generate");

// Define global variables for the password criteria so it is accessible to all functions. 
  // Previously, these were all declared within the function writePassword(). This, however, created an issue because by defining another function, passwordGenerator(), those variables were not accessible to passwordGenerator()
var length;
var lowercase;
var uppercase;
var numeric;
var specialCharacters;

    // Place password character options here
const lowercaseCharacterOptions = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const uppercaseCharacterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numericCharacterOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const specialCharacterOptions = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Special character considerations. The first element is a space. Surround quotation mark with apostrophes, apostrophe with quotation marks, and add a second backslash to the backslash character
// There is some trickiness with the space element 

// Write password to the #password input
function writePassword() {
 // var password = generatePassword(); // For the moment, I have commented this out until we write the function `generatePassword()`
  var passwordText = document.querySelector("#password");
  length = window.prompt("What is the desired length for your password? Please select a length of at least 8 characters and no more than 128 characters.");



  // Collecting and storing the character-type password criteria selections
  if (length >= 8 && length <= 128) {
    lowercase = window.confirm("Include lowercase values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
    uppercase = window.confirm("Include uppercase values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
    numeric = window.confirm("Include numeric values in your password?" + "\n" + "\n" + "If yes, select 'OK'; no, select 'Cancel'.");
    specialCharacters = window.confirm("Include special character values in your password?" + "\n" 
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
        passwordGenerator();
      // else
        // window.alert("Sorry, we were unable to generate a password for you! At least one character type must be selected.")
    } else {
      window.alert("Sorry, it seems we were not on the same page about your password criteria! Please click 'Generate Password' to reselect your criteria.");
    }
  } else {
    window.alert("Sorry, we were not able to validate the length of your password. Please select an integer between 8 and 128, inclusive.");
  }


 // passwordText.value = password; // For the moment, I have commented this out until I solidify 

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// -------------------------------------

// RANDOM GENERATOR FUNCTION OUTLINE

// Create a new object with the available options that the user has indicated as true // Not implemented in this current iteration 
// Define an array of user's selected options `selectedOptions` that are true using `push` to append the list
// Define an empty array to hold the password
// Loop that iterates over the length of the requested password
  // Generate a random number between 0 and the length of the `selectedOptions` array to select character type for that element. This will provide the character type in a `characterType` variable
  // Depending on the character type, we need another random number between 0 and the length of the character type's array (Ex. numeric, need 0 through 9; lowercase, 0 through 25)
  // Push a value from property[index] to the `passwordArray` array
// Once the loop has finished iterating through the length of the desired password, convert `passwordArray` to a string that is shared with the user

// FUNCTION PROGRAMMING
function passwordGenerator() {

  // Declare selectedOptions array and add variable names of selected criteria
  var selectedOptions = [];
  if (lowercase) {
    selectedOptions.push("lowercaseCharacterOptions")
  }
  if (uppercase) {
    selectedOptions.push("uppercaseCharacterOptions")
  }
  if (numeric) {
    selectedOptions.push("numericCharacterOptions")
  }
  if (specialCharacters) {
    selectedOptions.push("specialCharacterOptions")
  }

  // Declare empty password array
  var passwordArray = [];

  // Run loop through length of password
  for (let i = 0; i < length; i++) {
    var randomSelectedOptionType = selectedOptions[Math.floor(Math.random() * selectedOptions.length)]; // Provides a string of the randomly selected character type
    var randomSelectedOptionIndex = Math.floor(Math.random() * eval(randomSelectedOptionType).length); // Provides a randomly generated numeric value

    var randomSelectedOptionString = randomSelectedOptionType + "[" + randomSelectedOptionIndex + "]";
    // console.log(randomSelectedOptionString);
    var randomPasswordValue = eval(randomSelectedOptionString);
    passwordArray.push(randomPasswordValue);
  }
  // Convert the password array to a string
  var passwordString = passwordArray.join("");
  console.log(passwordString);
  window.alert("Your randomly generated password: " + "\n" + passwordString);
}