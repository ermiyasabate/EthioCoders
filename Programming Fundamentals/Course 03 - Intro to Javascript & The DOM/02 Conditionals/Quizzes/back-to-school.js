/*
 * Programming Quiz: Back to School
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 */
 
// change the value of `education` to test your code
const education = "an Associate's degree";

// set the value of this based on a person's education
let salary = 0;

// your code goes here
switch(education) {
    case "no high school diploma":
        salary = 25636
        break
    case "a high school diploma":
        salary = 35256
        break
    case "an Associate's degree":
        salary = 41496
        break
    case "a Bachelor's degree":
        salary = 59124
        break
    case "a Master's degree":
        salary = 69732
        break
    case "a Professional degree":
        salary = 89960
        break
    case "a Doctoral degree":
        salary = 84396
        break
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString() + "/year.")