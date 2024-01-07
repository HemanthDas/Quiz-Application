import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { DialogBoxContext } from "../context/dailogbox";
import Cookies from "js-cookie";
const Nav = () => {
  const { setState, setType } = useContext(DialogBoxContext);
  return (
    <nav>
      <Link to={"/testme/"}>TestMe</Link>
      <ul>
        <Link to={"/testme/subject"}>subjects</Link>
        <Link to={"/testme/topic"}>topics</Link>
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
              Cookies.remove("user");
              window.location.reload();
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
