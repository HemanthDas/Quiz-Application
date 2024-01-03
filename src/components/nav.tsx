import { Link } from "@tanstack/react-router";
const Nav = () => {
  return (
    <nav>
      <div></div>
      <ul>
        <Link to={"/testme/subjects"}>subjects</Link>
        <Link to={"/testme/login"}>login</Link>
      </ul>
    </nav>
  );
};

export default Nav;
