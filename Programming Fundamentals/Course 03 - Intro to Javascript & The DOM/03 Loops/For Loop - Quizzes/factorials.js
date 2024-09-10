/*
 * Programming Quiz: Factorials
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your code should produce the expected output
 */

// your code goes here
let solution = 1

for (let factorial = 12; factorial >= 1; factorial--) {
    solution *= factorial
}

console.log(solution)