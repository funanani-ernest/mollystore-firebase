import React, { useState, useEffect } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from '@fortawesome/fontawesome-free';
import {
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { auth } from "../../../src/Firebase";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Add an event listener to watch for changes in authentication status
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("User signed out");
        history.push("/home");
      })
      .catch((error) => {
        // An error occurred.
        console.error("Error signing out:", error);
      });
  };

  return (
    <div className="navbar">
      <NavLink to="/home" className="navlink-custom">
        <h1 className="store-name">Molly Online Store</h1>
      </NavLink>
      <div className="det-info">
        {isLoggedIn && user && user.email === "adminmolly@gmail.com" && (
          <NavLink to="/upload" className="navlink-custom">
            <span>Upload Products</span>
          </NavLink>
        )}

        <NavLink to="/products" className="navlink-custom">
          <span>Products</span>
        </NavLink>
       

        <NavLink to="aboutus" className="navlink-custom">
          <span>About Us</span>
        </NavLink>
        <div className="dropdown">
          Contact Us
          <div className="dropdown-content">
            <div className="dropdown-span-a">
               <span>
                  <FontAwesomeIcon icon={faPhone}/> 081 883 6917
                </span>
              <a href="https://www.facebook.com/profile.php?id=61551567441427">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=0818836917&text=Hello%21">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </div>
          </div>
        </div>

        {isLoggedIn ? (
          <div className="logged-info">
            <span>{user ? user.email : null}</span>
            <button onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
