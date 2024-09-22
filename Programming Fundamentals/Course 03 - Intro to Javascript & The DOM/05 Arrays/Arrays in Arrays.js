const grid = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
];

function all(element) {
    for (let row = 0; row < element.length; row++) {
        for (let column = 0; column < element[row].length; column++) {
            console.log(element[row][column])
        }
    }
}

all(grid)