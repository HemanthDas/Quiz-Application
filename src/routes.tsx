import { RootRoute, Route } from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Subject from "./pages/subject.tsx";
import Topic from "./pages/topic.tsx";
import PreTest from "./pages/pretest.tsx";
const rootRoute = new RootRoute({
  component: App,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/testme",
  component: Home,
});
const subjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "testme/subject",
  component: Subject,
});
const topicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "testme/topic",
  component: Topic,
});
const subjectIDRoute = new Route({
  getParentRoute: () => subjectRoute,
  path: "$id",
  component: PreTest,
});

const routeTree = rootRoute.addChildren([
  indexRoute.addChildren([
    subjectRoute.addChildren([subjectIDRoute]),
    topicRoute,
  ]),
]);

export default routeTree;
