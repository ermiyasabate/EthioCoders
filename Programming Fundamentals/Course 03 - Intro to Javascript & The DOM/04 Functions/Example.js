let newWord = ""

function reverseStrings(reverseMe) {
    for (let i = reverseMe.length; i >= 0; i--) {
        newWord += reverseMe[i]
    }

    return newWord;
}

console.log(reverseStrings("Ermiyas"))