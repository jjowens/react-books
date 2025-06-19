import BooksDal from "~/services/bookDalTest";
//import BooksDal from "~/services/bookDalProd";

const BookService = {
    searchBooks: function() {
        return BooksDal.searchBooks();
    }
}

export default BookService;