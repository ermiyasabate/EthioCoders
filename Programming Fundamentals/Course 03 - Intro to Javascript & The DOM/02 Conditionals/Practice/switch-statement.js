const value = 44

switch (value) {
    case 1:
        console.log("You selected option 1.");
        break;
    case 2:
        console.log("You selected option 2.");
        break;
    case 3:
        console.log("You selected option 3.");
        break;
    case 4:
        console.log("You selected option 4.");
        break;
    case 5:
        console.log("You selected option 5.");
        break;
    case 6:
        console.log("You selected option 6.");
        break;
    default:
        console.log("You did not select a valid option.");
}


// Example 1 - It doesn't matter where the default statement is placed
const favoriteFood = "soup";
let restaurant = undefined;

switch (favoriteFood) {
    case "pizza":
        restaurant = "pizzeria";
        break;
    default:
        restaurant = "diner";
        break;
    case "tacos":
        restaurant = "taqueria";
        break;
    case "sushi":
        restaurant = "sushi bar";
        break;
    case "pancakes":
        restaurant = "pancake house";
        break;
}

console.log("Go to the " + restaurant);