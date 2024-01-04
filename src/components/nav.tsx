import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { DialogBoxContext } from "../context/dailogbox";
const Nav = () => {
  const { setState, setType } = useContext(DialogBoxContext);
  return (
    <nav>
      <Link to={"/testme/"}>TestMe</Link>
      <ul>
        <Link to={"/testme/subject"}>subjects</Link>
        <button
          onClick={() => {
            setState(true);
            setType(1);
          }}
          tabIndex={0}
        >
          login
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
