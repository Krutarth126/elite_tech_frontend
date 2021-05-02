import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark navv">
      <a className="navbar-brand" href="/">
        <img src="https://i.ibb.co/tQYzJPs/logo.png" width="40px" alt="" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mx-5">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#technology">
              Technology Expertise
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#about">
              About Us
            </a>
          </li>
          <li className="nav-item mx-5">
            <a className="nav-link" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
