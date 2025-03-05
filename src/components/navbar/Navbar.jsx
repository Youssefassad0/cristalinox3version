import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link className="navbar-logo">CristalInox</Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ?  <IoClose className="fa-times" /> : <FiMenu className="fa-bars" />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Accueil
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
              A propos
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/catalogue"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Catalogue
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
              Contactez nous
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
