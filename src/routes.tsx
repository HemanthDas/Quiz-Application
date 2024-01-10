import { RootRoute, Route } from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
import Subject from "./pages/subject.tsx";
import Topic from "./pages/topic.tsx";
import Exam from "./pages/exam.tsx";
import { NotFoundRoute } from "./pages/notfound.tsx";
export const rootRoute = new RootRoute({
  component: App,
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});
const subjectRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/subject",
  component: Subject,
});
const topicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/topic",
  component: Topic,
});
const examRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/exam/$id",
  component: Exam,
});

const routeTree = rootRoute.addChildren([
  NotFoundRoute,
  indexRoute.addChildren([subjectRoute, topicRoute, examRoute]),
]);

export default routeTree;
