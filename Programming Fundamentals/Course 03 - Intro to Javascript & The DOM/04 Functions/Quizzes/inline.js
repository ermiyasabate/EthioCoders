/*
 * Programming Quiz: Inline Functions
 */
 
 /*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// don't change this code
// emotions() function definition
let finalWord = ""

const myFunc = function (num) {
    if (num === 0) {
        return "!"
    } else {
        for (let i = 0; i < num; i++) {
            finalWord += "ha"
        }
        return finalWord + "!";
    }
}

function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(0));
}

// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions("happy", myFunc)