const umbrella = {
    color: "pink",
    isOpen: false,
    open: function () {
        if (this.isOpen) {
            return "The umbrella is already opened!"
        } else {
            umbrella.isOpen = true
            return "Julia opens the umbrella"
        }
    }
}

console.log(umbrella.open());
console.log(umbrella.color);
