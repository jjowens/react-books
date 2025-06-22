import { useNavigate, Link } from "react-router-dom";
import bookService from "~/services/bookService";
import {BookRow} from "~/shared/components/bookrow/bookrow";

export function Catalogue() {
    const books = bookService.searchBooks();

    return (
        <main>
            <h1>Books</h1>

            { books ?
                <div>
                    <p>We got books. Well some of them</p>
                    {
                        books.map(item => <BookRow
                            author={item.author.fullname}
                            title={item.title}
                            genre={item.genre}/>)
                    }
                </div>
                :
                <p>We don't have any! :(</p>
            }
        </main>);
}