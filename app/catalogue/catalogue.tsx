import { useNavigate, Link } from "react-router-dom";

export function Catalogue() {

    const books = [
        {"id": 1, "title": "The Gathering", "author": "C.J. Tudor"},
        {"id": 2, "title": "Broken Dolls", "author": "Ally Malinenko"},
        {"id": 3, "title": "Salem's Lot", "author": "Stephen King"},
    ];

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