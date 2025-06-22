
export function BookRow({title, author, genre}) {
    return (
        <div data-genre={genre}>{title} - {author}</div>
    )
}