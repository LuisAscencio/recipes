import React from "react";
import { Link } from "react-router-dom";

import { FaHamburger } from "react-icons/fa";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        <FaHamburger size="40px" color="#cb444a" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navMenu"
        aria-controls="navbar-nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navMenu">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/newrecipe" className="navElements">
              New recipe <span className="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/myrecipes" className="navElements">
              My recipe
            </Link>
          </li>

          <li className="nav-item">
            <Link className="navElements" to="recipevault">
              Recipe vault
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
