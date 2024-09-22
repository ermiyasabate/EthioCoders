const dates = ["2024-1-12", "2023-1-12", "2022-1-12"]

function formatDates(element) {
    const newPart = dates.split("-")
    return newPart[1] + "/" + newPart[2] + "/" + newPart[0]
}