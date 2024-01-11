import React, { createContext } from "react";
import Nav from "../components/nav";
interface NavbarContextProps {
  show: boolean;
  nohide: () => void;
  hide: () => void;
}
export const NavbarContext = createContext({
  show: false,
  nohide: () => {},
  hide: () => {},
} as NavbarContextProps);
const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = React.useState(false);

  const nohide = React.useCallback(() => {
    setShow(true);
  }, []);
  const hide = React.useCallback(() => {
    setShow(false);
  }, []);
  const value = React.useMemo(() => {
    return { show, nohide, hide };
  }, [show, nohide, hide]);
  return (
    <NavbarContext.Provider value={value}>
      {!show && <Nav />}
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarProvider;
