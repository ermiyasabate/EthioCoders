const names = ["Abebe", "Molla", "Moges", "Chala"]
const nameUppercase = names.map(uppercase)

console.log(names.toString());
console.log("Uppercase: " + nameUppercase);

function uppercase (element) {
    return element.toUpperCase()
}