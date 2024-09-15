/*
 * Programming Quiz: The Price is Right (6-3)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `prices`
 * - The value of the 1st, 3rd, and 7th elements should be doubled
 * - Your code should print `prices` to the console as an array. Do not iterate over the elements. 
 */

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

// your code goes here
prices[0] = prices[0] * 2
prices[2] = prices[2] * 2
prices[6] = prices[6] * 2

console.log(prices)

// OR
const prices2 = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];

for (let index = 0; index < prices2.length; index++) {
    //change the value of first element
    if (index === 0) {
        prices2[index] = prices2[index] * 2;
    }
    //change the value of third element
    else if (index === 2) {
        prices2[index] = prices2[index] * 2;
    }
    //change the value of seventh element
    else if (index === 6) {
        prices2[index] = prices2[index] * 2;
    }
}
console.log(prices2);