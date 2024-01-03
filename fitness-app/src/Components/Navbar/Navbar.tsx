// Navbar Component

import { Nav } from "react-bootstrap";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Nav>
      <div className="logo">LOGO</div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signIn">Sign In</Link>
          </li>
          <li>
            Don't have account?
            <Link to="/register"> Register</Link>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

export default Navbar;
