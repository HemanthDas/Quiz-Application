import { DialogBoxContext } from "./context/dailogbox";
import Modal from "./components/modal";
import NavbarProvider from "./context/navbarcontext";
import Footer from "./components/footer";
import { Outlet } from "@tanstack/react-router";

import { useContext } from "react";

import { TanStackRouterDevtools } from "@tanstack/router-devtools";

function App() {
  const { state, type } = useContext(DialogBoxContext);
  return (
    <Modal type={type} state={state}>
      <NavbarProvider>
        <main>
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools />
      </NavbarProvider>
    </Modal>
  );
}

export default App;
