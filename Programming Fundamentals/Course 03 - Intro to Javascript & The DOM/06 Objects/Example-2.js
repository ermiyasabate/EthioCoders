const sister = {
    name: "Sarah",
    age: 23,
    parents: ["Alice", "Andy"],
    siblings: ["Julia"],
    favoriteColor: "purple",
    pets: true,
    paintPicture: function () { return "Sarah paints!"; }
};

sister.paintPicture();

console.log(sister.parents); // Dot Notation
console.log(sister["parents"]); // Bracket Notation
