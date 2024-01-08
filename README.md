# Password Webpage

## Description

This webpage provides a user with a randomly generated password that accounts for a user's selected password criteria. 

**Features include**:

- Prompts that gather a user's input for their desired password criteria:
    - Users can request a password with a minimum length of 8 characters and a maximum length of 128 characters
    - Users can include, or exclude, ***lowercase characters*** from their generated password
    - Users can include, or exclude, ***uppercase characters*** from their generated password
    - Users can include, or exclude, ***numeric characters*** from their generated password
    - Users can include, or exclude, ***special characters*** from their generated password
- Prior to password generation, users are presented with their selected criteria and asked to confirm their choices
- The generated password is presented to the user and can be copied to their clipboard

This exercise was provided by Northwestern University and edX through the Coding boot camp. Submitted as fulfillment of the Module 03 exercise during the December, 2023 - June, 2024 cohort.

## Installation

N/A

## Usage

This webpage has been published through GitHub pages and this project's files can be accessed through the following links:

- [Link to the published GitHub Page](https://anthonyero.github.io/password-generator/)

- [Link to the GitHub repository](https://github.com/anthonyero/password-generator)

To generate a password, a user must request a password of at least 8, but no more than 128, characters and must select at least one character type. 

Relevant images, HTML file, CSS stylesheet, and JavaScript files are included within this repository. I developed two JavaScript files to generate a user's requested password. 

- `script.js`: Develops a password by randomly selecting one of the user's selected character types, randomly generating an index within the character random character type's array, constructing and evaluating the resulting string `randomSelectedOptionType[randomSelectedOptionIndex]`, appending the resulting values, and sharing the resulting string with the user. The randomization loops in iterations equal to the requested password's length.
- `script2.js`: Develops a password by first constructing an array with each selected character type's options, randomly selecting a value within this array, and appending the selected value to a password string. The randomization loops in iterations equal to the requested password's length.

`script2.js` was developed to provide a more streamlined approach/function to generate a password for the user. As a result, `script2.js` is the file utilized for the live GitHub Page deployment. If interested, `script.js` can be viewed and can be reattached to the `index.html` file on a local copy.

The HTML, CSS, and JavaScript files include comments detailing changes implemented within them. Further justifications can also be found within the repository's "Issues" tab.

Please refer to the commit history and branches within the repository for a tracked history of changes.

## Credits

Initial starter code was provided by Northwestern University and edX through the Coding boot camp. Starter files were uploaded in the commit: "initial commit - uploading starter files". 

The [list of password special characters](https://www.owasp.org/index.php/Password_special_characters) utilized in this password generator were provided by the OWASP Foundation.

## License

N/A

![Screenshot of live password generator webpage 1-7-24](/assets/images/live-password-generator-webpage.png)