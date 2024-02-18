import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; //CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navList">
        <li className="navItem">
          <Link to="/" className="navLink">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link to="/my-list" className="navLink">
            My List
          </Link>
        </li>
        {/* Add more navigation links here if needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
