import { DialogBoxContext } from "./context/dailogbox";
import Modal from "./components/modal";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { Outlet } from "@tanstack/react-router";
import { CookiesProvider } from "react-cookie";
import { useContext } from "react";

// import { TanStackRouterDevtools } from "@tanstack/router-devtools";
function App() {
  const { state, type } = useContext(DialogBoxContext);
  return (
    <CookiesProvider>
      {" "}
      <Modal type={type} state={state}>
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
        {/* <TanStackRouterDevtools /> */}
      </Modal>
    </CookiesProvider>
  );
}

export default App;
