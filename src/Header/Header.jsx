import "./Header.css"

function Header({children}) {
  return (
    <h1 className="Header">{children}</h1>
  );
}

export default Header;