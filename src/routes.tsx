import { RootRoute, Route } from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";

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

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([subIndexRoute]),
]);

export default routeTree;
