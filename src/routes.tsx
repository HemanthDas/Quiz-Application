import { RootRoute, Route } from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Subject from "./pages/subject.tsx";
import Topic from "./pages/topic.tsx";
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
  component: Subject,
});
const topicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/testme/topic",
  component: Topic,
});

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([subIndexRoute, topicRoute]),
]);

export default routeTree;
