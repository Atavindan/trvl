import React, { useState,useEffect } from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css";
import {Button} from "./Button.js";


function Navbar() {
    const [click ,setClick] = useState(false);
    const [button,setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const CloseMobileMenu = () => setClick(false);

    const showButton = () => {
      if(window.innerWidth <= 960) {
        setButton(false)
      }
      else {
        setButton(true)
      }
    };

      useEffect(() => {
        showButton()
      }, []);

    window.addEventListener('resize',showButton);

    return (
      <div>
          <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo" onClick={CloseMobileMenu}>TRVL <i className="fab fa-typo3" /></Link>
              <div className="menu-icon" onClick={handleClick}>
               <i className={click ? "fas fa-times": "fas fa-bars"}></i>
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                  <Link to="/" className="nav-links" onClick={CloseMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-links" onClick={CloseMobileMenu}>
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-links" onClick={CloseMobileMenu}>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/SignUp" className="nav-links-mobile" onClick={CloseMobileMenu}>
                    SignUp
                  </Link>
                </li>
              </ul>
              {button && <Button buttonStyle='btn--outline'>SIGN-UP</Button>}
            </div>
          </nav>
      </div>
    );
  
}

export default Navbar;