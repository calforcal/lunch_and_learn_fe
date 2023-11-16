import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar() {
  return (
    <ul className="navList">
      <Link className="navItem" to='/'>Home</Link>
      <li className="navItem">|</li>
      <Link className="navItem">Register</Link>
      <li className="navItem">|</li>
      <Link className="navItem">Log In</Link>
    </ul>
  );
}

export default NavBar;