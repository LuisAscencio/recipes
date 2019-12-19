import React from "react";
import { Link } from "react-router-dom";

import { FaHamburger } from "react-icons/fa";
const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/home">
          <a class="navbar-brand" href="#">
            <FaHamburger size="40px" color="#cb444a" />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/home">
              <li className="nav-item active">
                <a className="navElements" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
            </Link>
            <Link to="/myrecipes">
              <li className="nav-item">
                <a className="navElements" href="#">
                  My recipe
                </a>
              </li>
            </Link>
            <Link to="recipevault">
              <li className="nav-item">
                <a className="navElements" href="#">
                  Recipe vault
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
