import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
                route("welcome/:id?","routes/welcome-home.tsx")] satisfies RouteConfig;

