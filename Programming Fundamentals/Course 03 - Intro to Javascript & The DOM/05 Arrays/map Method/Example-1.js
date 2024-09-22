const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const squaredNumber = numbers.map(squared)

console.log(numbers.toString());
console.log("Squared: " + squaredNumber);

function squared(element) {
    return Math.pow(element, 2)
}