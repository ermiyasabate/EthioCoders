const dates = ["2024-1-12", "2023-1-12", "2022-1-12"]
const format = dates.map(formatDates)

console.log("Before: " + dates);
console.log("Formated: " + format);


function formatDates(element) {
    const newPart = element.split("-")
    return newPart[1] + "/" + newPart[2] + "/" + newPart[0]
}