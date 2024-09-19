/*
    The shift() method of Array instances removes the first element from an array 
    and returns that removed element. 
    This method changes the length of the array.
*/
const removeFirstElement = ["a", "b", "c"];
const firstElement = removeFirstElement.shift()

console.log(firstElement)
// Expected output: "a"

console.log(removeFirstElement)
// Expected output: ["b", "c"]