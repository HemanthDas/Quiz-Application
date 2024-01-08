import { Route } from "@tanstack/react-router";
import { rootRoute } from "../routes.tsx";
const NotFound = () => {
  return <div>NotFound</div>;
};
export const NotFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});
export default NotFound;
