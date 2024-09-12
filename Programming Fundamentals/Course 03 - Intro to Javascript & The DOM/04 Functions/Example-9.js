const catSays = function (max) {
    let catMessage = "";
    for (let i = 0; i < max; i++) {
        catMessage += "meow ";
    }
    return catMessage;
};

console.log(catSays)


let x = 1;

function addTwo() {
   let x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);