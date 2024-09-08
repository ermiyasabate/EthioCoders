/*
 * Programming Quiz: What do I Wear?
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output.
 */
 


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

// your code goes here
const S = 18 <= shirtWidth < 20 && 28 <= shirtLength < 29 && 8.13 <= shirtSleeve < 8.38
const M = 20 <= shirtWidth < 22 && 29 <= shirtLength < 30 && 8.38 <= shirtSleeve < 8.63
const L = 22 <= shirtWidth < 24 && 30 <= shirtLength < 31 && 8.63 <= shirtSleeve < 8.88
const XL = 24 <= shirtWidth < 26 && 31 <= shirtLength < 33 && 8.88 <= shirtSleeve < 9.63
const Two_XL = 26 <= shirtWidth < 28 && 33 <= shirtLength < 34 && 9.63 <= shirtSleeve < 10.13
const Three_XL = shirtWidth >= 28 && shirtLength >= 34 && shirtSleeve >= 10.13

if (S){
    console.log("S")
} else if (M){
    console.log("M")
} else if (L){
    console.log("L")
} else if (XL){
    console.log("XL")
} else if (Two_XL){
    console.log("2XL")
} else if (Three_XL){
    console.log("3XL")
} else {
    console.log("N/A")
}