// Multiply Each Element by 10: Modify the original array by multiplying each element by 10:
const numbers = [65, 44, 12, 4];

// numbers.forEach(function(array){
//     array = array * 10
//     console.log(array);
// })
// OR

numbers.forEach(function(array, arrayItem) {
    array[arrayItem] *= 10
})

console.log(numbers);
