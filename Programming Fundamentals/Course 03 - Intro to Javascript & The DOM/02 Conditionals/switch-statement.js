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


// Example 2 - The output is 30
const month = 7;
let days;

switch (month) {
    case 1:
    case 2:
        days = 28;
        break;
    case 3:
    case 4:
        days = 30;
        break;
    case 5:
    case 6:
        days = 30;
        break;
    case 7:
    case 8:
    case 9:
        days = 30;
        break;
    case 10:
    case 11:
        days = 30;
        break;
    case 12:
    default:
        days = 31;
}

console.log("There are " + days + " days in this month.");