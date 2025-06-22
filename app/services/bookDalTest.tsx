const books = [
    {"id": 1, "title": "The Gathering", "author": {"firstname": "C.J", "lastname": "Tudor", "fullname": "C.J. Tudor"}, "genre":  "Horror"},
    {"id": 2, "title": "Broken Dolls", "author": {"firstname": "Ally", "lastname": "Malinenko", "fullname": "Ally Malinenko"}, "genre":  "Horror"},
    {"id": 3, "title": "Salem's Lot",  "author": {"firstname": "Stephen", "lastname": "King", "fullname": "Stephen King"}, "genre":  "Horror"},
    {"id": 4, "title": "Test", "author": {"firstname": "Test", "lastname": "Test", "fullname": "Test"}, "genre":  "Dummy"}
];

const BooksDal = {

    searchBooks: function() {
        return books;
    }

}

export default BooksDal;