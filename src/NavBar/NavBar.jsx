import "./NavBar.css"

function NavBar() {
  return (
    <ul className="navList">
      <li className="navItem"><a>Home</a></li>
      <li className="navItem">|</li>
      <li className="navItem"><a>Register</a></li>
      <li className="navItem">|</li>
      <li className="navItem"><a>Log In</a></li>
    </ul>
  );
}

export default NavBar;