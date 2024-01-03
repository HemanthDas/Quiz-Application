import { Outlet, RootRoute, Route } from "@tanstack/react-router";

import Footer from "./components/footer.tsx";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Home from "./pages/home.tsx";
import Nav from "./components/nav.tsx";
const rootRoute = new RootRoute({
  component: () => (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </>
  ),
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
  getParentRoute: () => rootRoute,
  path: "/testme/login",
  component: () => <>Login </>,
});

const routeTree = rootRoute.addChildren([
  loginRoute,
  indexRoute.addChildren([subIndexRoute]),
]);

export default routeTree;
