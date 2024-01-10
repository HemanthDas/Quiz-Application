import React, { createContext } from "react";
import Nav from "../components/nav";
interface NavbarContextProps {
  show: boolean;
  toggle: () => void;
}
export const NavbarContext = createContext({
  show: false,
  toggle: () => {},
} as NavbarContextProps);
const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = React.useState(false);

  const toggle = React.useCallback(() => {
    setShow(!show);
  }, [show]);
  const value = React.useMemo(() => {
    return { show, toggle };
  }, [show, toggle]);
  return (
    <NavbarContext.Provider value={value}>
      {!show && <Nav />}
      {children}
    </NavbarContext.Provider>
  );
};
export default NavbarProvider;
