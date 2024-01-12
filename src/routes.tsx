import { RootRoute, Route, lazyRouteComponent } from "@tanstack/react-router";
import App from "./App.tsx";
import Home from "./pages/home.tsx";
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
  component: lazyRouteComponent(() => import("./pages/subject.tsx")),
});
const topicRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/topic",
  component: lazyRouteComponent(() => import("./pages/topic.tsx")),
});
const examRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/exam/$id",
  component: lazyRouteComponent(() => import("./pages/exam.tsx")),
});
const ResultRoute = new Route({
  getParentRoute: () => examRoute,
  path: "/result",
  component: lazyRouteComponent(() => import("./pages/result.tsx")),
});
const routeTree = rootRoute.addChildren([
  NotFoundRoute,
  indexRoute.addChildren([
    subjectRoute,
    topicRoute,
    examRoute.addChildren([ResultRoute]),
  ]),
]);

export default routeTree;
