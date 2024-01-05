import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { DialogBoxContext } from "../context/dailogbox";
import { useCookies } from "react-cookie";
const Nav = () => {
  const [cookies, removeCookie] = useCookies(["user"]);
  const { setState, setType } = useContext(DialogBoxContext);
  return (
    <nav>
      <Link to={"/testme/"}>TestMe</Link>
      <ul>
        <Link to={"/testme/subject"}>subjects</Link>
        {cookies.user !== "token" ? (
          <button
            onClick={() => {
              setState(true);
              setType(1);
            }}
            tabIndex={0}
          >
            login
          </button>
        ) : (
          <button
            onClick={() => {
              removeCookie("user", { path: "/" });
            }}
          >
            logout
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
