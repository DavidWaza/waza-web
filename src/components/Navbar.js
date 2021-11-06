import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./button";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <Router>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              BINARY
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link to="/services"> SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link to="/about-me">ABOUT US</Link>
              </li>
              <li className="nav-btn">
                {
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--primary" buttonSize="btn--mobile">
                      SIGN IN
                    </Button>
                  </Link>
                }
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </Router>
  );
}

export default Navbar;
