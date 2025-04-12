import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/MKODE.gif";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Get the current route

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className={`nav-links-container ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={() => setMenuOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={location.pathname === "/about" ? "active" : ""} onClick={() => setMenuOpen(false)}>About</Link>
            </li>
            <li>
              <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""} onClick={() => setMenuOpen(false)}>Projects</Link>
            </li>
            <li>
              <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""} onClick={() => setMenuOpen(false)}>Contact</Link>
            </li>
            <li>
              <Link to="/why-me" className={location.pathname === "/why-me" ? "active" : ""} onClick={() => setMenuOpen(false)}>Why Me</Link>
            </li>
          </ul>
        </div>

        <div className="nav-icons">
          <FaSearch className="icon" onClick={() => setSearchOpen(!searchOpen)} />
          <a href="https://www.instagram.com/manish.k_8_3_5/?next=%2F" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          {/* Hamburger Icon */}
          {menuOpen ? (
            <FaTimes className="menu-icon" onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars className="menu-icon" onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {/* Search Box */}
      {searchOpen && (
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <FaTimes className="close-icon" onClick={() => setSearchOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;