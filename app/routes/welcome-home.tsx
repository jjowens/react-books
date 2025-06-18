import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({params}: Route.MetaArgs) {
    const newTitle =  "New React Router App " & params.id;

    return [
        { title: newTitle},
        { name: "description", content: "Welcome to React Router!"},
    ];
}

export default function WelcomeHome({params}: Route.MetaArgs) {
    return <Welcome />;
}