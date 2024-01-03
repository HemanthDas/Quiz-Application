import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Router } from "@tanstack/react-router";
import routeTree from "./routes.tsx";
import "./App.css";

const route = new Router({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    route: typeof route;
  }
}
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
