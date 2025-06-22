import {BaseProps} from "~/shared/types/baseprops";

export interface BookType extends BaseProps {
    title: string;
    author: string;
    genre: string;
}