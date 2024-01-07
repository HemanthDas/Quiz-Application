import { DialogBoxContext } from "./context/dailogbox";
import Modal from "./components/modal";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "@tanstack/react-router";

import { useContext } from "react";

// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
function App() {
  const { state, type } = useContext(DialogBoxContext);
  return (
    <Modal type={type} state={state}>
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </Modal>
  );
}

export default App;
