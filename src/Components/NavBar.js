import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        to="/list"
      >
        The List
      </NavLink>
      <NavLink
        to="/resources"
      >
        Resources
      </NavLink>
    </nav>
  );
};

export default NavBar;
