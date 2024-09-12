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