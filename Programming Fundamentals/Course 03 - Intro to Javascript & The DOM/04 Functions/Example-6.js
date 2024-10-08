const bookSeeker = "James";
const book = "Great Expectations";

function library() {
    const librarian = "Julia";
    console.log(bookSeeker + " asked " + librarian + " for " + book);

    function classicLiterature() {
        const shelf = "Dickens";
        console.log(bookSeeker + " found " + book + " on the " + shelf + " shelf!");
    }

    classicLiterature();
}

library()

// bookSeeker and book are in the global scope so as expected, we can use access them anywhere in the code.
// console.log(librarian); This we produce an error message, because librarian can only be accessed inside the scope of the library function.
// So librarian and shelf are in the function scope variables we can only access them in the their respective functions