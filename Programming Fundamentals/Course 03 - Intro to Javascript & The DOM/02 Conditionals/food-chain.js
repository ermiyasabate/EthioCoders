/*
 * Programming Quiz - Navigating the Food Chain
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
const eatsPlants = true;
const eatsAnimals = true;
// let category;

// your code goes here
// Assuming you have boolean variables: eatsPlants and eatsAnimals
let category = eatsPlants
  ? eatsAnimals
    ? 'Omnivore'
    : 'Herbivore'
  : eatsAnimals
    ? 'Carnivore'
    : undefined;

console.log(category);