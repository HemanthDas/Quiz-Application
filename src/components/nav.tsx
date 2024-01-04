import { Link } from "@tanstack/react-router";
const Nav = () => {
  return (
    <nav>
      <Link to={"/testme/"}>TestMe</Link>
      <ul>
        <Link to={"/testme/subject"}>subjects</Link>
        <Link to={"/testme/login"}>login</Link>
      </ul>
    </nav>
  );
};

export default Nav;
