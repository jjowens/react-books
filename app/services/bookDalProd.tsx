const books = [
    {"id": 1, "title": "The Gathering", "author": "C.J. Tudor"},
    {"id": 2, "title": "Broken Dolls", "author": "Ally Malinenko"},
    {"id": 3, "title": "Salem's Lot", "author": "Stephen King"},
    {"id": 4, "title": "Prod", "author": "Prod"},
];

const BooksDal = {

    searchBooks: function() {
        return books;
    }

}

export default BooksDal;