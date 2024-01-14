import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { DialogBoxContext } from "../context/dailogbox";
import { AuthContext } from "../context/authcontext";
import Cookies from "js-cookie";
const Nav = () => {
  const { setState, setType } = useContext(DialogBoxContext);
  const { deleteUser } = useContext(AuthContext);
  return (
    <nav>
      <Link to={"/"}>TestMe</Link>
      <ul>
        <Link to={"subject"}>subjects</Link>
        <Link to={"topic"}>topics</Link>
        {!Cookies.get("user") ? (
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
              deleteUser();
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
