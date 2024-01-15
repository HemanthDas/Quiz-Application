import { DialogBoxContext } from "./context/dailogbox";
import Modal from "./components/modal";
import NavbarProvider from "./context/navbarcontext";
import Footer from "./components/footer";
import { Outlet } from "@tanstack/react-router";
import { useContext } from "react";
import AuthProvider from "./context/authcontext";

function App() {
  const { state, type } = useContext(DialogBoxContext);
  return (
    <AuthProvider>
      <Modal type={type} state={state}>
        <NavbarProvider>
          <main>
            <Outlet />
          </main>
          <Footer />
        </NavbarProvider>
      </Modal>
    </AuthProvider>
  );
}

export default App;
