import { DialogBoxContext } from "./context/dailogbox";
import Modal from "./components/modal";
import Footer from "./components/footer";
import { Outlet } from "@tanstack/react-router";
import { useContext } from "react";
import AuthProvider from "./context/authcontext";
import Nav from "./components/nav";
function App() {
  const { state, type } = useContext(DialogBoxContext);
  return (
    <AuthProvider>
      <Modal type={type} state={state}>
        <Nav />
        <main>
          <Outlet />
        </main>
        <Footer />
      </Modal>
    </AuthProvider>
  );
}

export default App;
