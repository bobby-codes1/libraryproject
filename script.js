const libraryArray =[];

//constructor for books
function Book(title, author, productionYear, genre){
    this.title = title;
    this.author = author;
    this.productionYear = productionYear;
    this.genre = genre;
}

//function to add books to library
function addToLibrary(bookTitle, bookAuthor, bookYear, bookGenre){
    const crypto = require ('crypto');
    const id = crypto.randomUUID();
    console.log(id);
    const bookNumber = new Book(bookTitle, bookAuthor, bookYear, bookGenre);
    libraryArray.push(bookNumber);

}


//adding some books to the library
addToLibrary("The Hobbit", "J. R. R. Tolkien", "1979", "Adventure")
addToLibrary("Richest Man in Babylon", "Robert S Clason", "1967", "NonFiction")
addToLibrary("Captain Underpants", "R. L Stine", "1993", "Adventure")
addToLibrary("Goosebumps", "R. L. Stine", "1999", "Fun Fiction")
addToLibrary("The Alchemist", "Paulo Coelho", "1963", "Lesson Fiction")
addToLibrary("Millionaire Fastlane", "M. J. DeMarco", "1994", "Money")
addToLibrary("Think and Grow Rich", "Napoleon Hill", "1972", "NonFiction")

console.log(libraryArray);




