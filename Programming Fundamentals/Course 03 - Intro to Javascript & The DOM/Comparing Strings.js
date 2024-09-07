console.log("Yes" == "yes")

console.log('Y' != 'y')


// Pick a string. Your string can have any number of characters.
const my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
const ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);


const my_strings = "Udacity";

// Iterate using a Loop
for (let i = 0; i < my_strings.length; i++) {
  console.log(my_strings.charCodeAt(i));
}