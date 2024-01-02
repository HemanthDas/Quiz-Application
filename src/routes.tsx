import { Outlet, RootRoute, Route } from "@tanstack/react-router";
import App from "./App.tsx";
import Footer from "./components/footer.tsx";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
const rootRoute = new RootRoute({
  component: () => (
    <>
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </>
  ),
});
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/testme",
  component: App,
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
