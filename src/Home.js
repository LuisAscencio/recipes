import React from "react";
import { FaHamburger } from "react-icons/fa";
const Home = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <FaHamburger size="40px" color="#cb444a" />
        </a>
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
            <li className="nav-item active">
              <a className="navElements" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="navElements" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="navElements" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="home">
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="groupButtons">
          <FaHamburger size="250px" color="white" />
        </div>
        <br />

        <h2 className="title">Recipes</h2>
        <canvas width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default Home;
