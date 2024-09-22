const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const squaredNumber = numbers.map(squared)
const cubeNumber = numbers.map(cube)

console.log(numbers.toString());
console.log("Squared: " + squaredNumber);

function squared(element) {
    return Math.pow(element, 2)
}

function cube(element) {
    return Math.pow(element, 3)
}

console.log("Cube: " + cubeNumber);