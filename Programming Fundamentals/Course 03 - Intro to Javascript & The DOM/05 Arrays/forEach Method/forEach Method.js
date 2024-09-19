const myArray = ["A", "B", "C", "D"];

// function myAwesomeFunction(element, index, array) {
//     console.log("Element: ", element);
//     console.log("Index: ", index);
//     console.log("Array: ", array);
// }

// myArray.forEach(myAwesomeFunction);

myArray.forEach(function (element, index, array) {
    console.log("Element: ", element);
    console.log("Index: ", index);
    console.log("Array: ", array);
});