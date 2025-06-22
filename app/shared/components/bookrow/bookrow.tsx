import type {BookType} from "~/shared/types/booktype";

export function BookRow(props: BookType) {
    return (
        <div data-genre={props.genre}><p>{props.title} - {props.author} - ID: {props.id ? props.id : "None"}</p></div>
    )
}