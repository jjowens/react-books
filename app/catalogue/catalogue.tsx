import { useNavigate, Link } from "react-router-dom";
import bookService from "~/services/bookService";

export function Catalogue() {
    const books = bookService.searchBooks();

    return (
    <main>
        <h1>Books</h1>

        { books ?
            <div>
                <p>We got books</p>
                {
                    books.map(item => <p>{item.title} - {item.author}</p>)
                }
            </div>
         :
         <p>We don't have any! :(</p>
        }
    </main>);
}