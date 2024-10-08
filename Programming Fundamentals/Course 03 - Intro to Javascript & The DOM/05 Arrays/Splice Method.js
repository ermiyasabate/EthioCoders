const donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1) // This removes elements from index 1 to the last
console.log(donuts)

const donutsOne = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donutsOne.splice(1, 2) // This removes elements index 1 and the next elements
console.log(donutsOne)

const donutsTwo = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donutsTwo.splice(1, 2, "chocolate cruller", "creme de leche") // This removes elements index 1 and the next two elements and adds two donuts
console.log(donutsTwo)

const donutsThree = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donutsThree.splice(-2, 2) // This removes elements the second last element and the element before it
console.log(donutsThree)

const donutsFour = ["cookies", "cinnamon sugar", "creme de leche"];
donutsFour.splice(-2, 0, "chocolate frosted", "glazed"); // This will not delete anything but adds two element
console.log(donutsFour)