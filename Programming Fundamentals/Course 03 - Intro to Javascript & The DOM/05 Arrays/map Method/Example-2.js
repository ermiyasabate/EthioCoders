const names = ["Abebe", "Molla", "Moges", "Chala"]
const nameUppercase = names.map(uppercase)
const nameLowercase = names.map(lowercase)

console.log(names.toString());
console.log("Uppercase: " + nameUppercase);
console.log("Lowercase: " + nameLowercase);

function uppercase (element) {
    return element.toUpperCase()
}

function lowercase (element) {
    return element.toLowerCase()
}