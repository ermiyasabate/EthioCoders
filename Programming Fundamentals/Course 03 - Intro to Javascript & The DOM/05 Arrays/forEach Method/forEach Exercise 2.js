// Multiply Each Element by 10: Modify the original array by multiplying each element by 10:
const numbers = [65, 44, 12, 4];

// numbers.forEach(function(array){
//     array = array * 10
//     console.log(array);
// })
// OR

numbers.forEach((item, arr, index) => {
    arr[index] = item * 10;
});
console.log("Modified Array:", numbers);

