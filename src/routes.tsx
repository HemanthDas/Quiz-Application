import { RootRoute, Route } from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Login from "./pages/login.tsx";

const rootRoute = new RootRoute({
  component: App,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/testme",
  component: Home,
});
const subIndexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/testme/subject",
  component: () => <>Not App </>,
});
const loginRoute = new Route({
  getParentRoute: () => indexRoute,
  path: "/testme/login",
  component: Login,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  indexRoute.addChildren([subIndexRoute]),
]);

export default routeTree;
