import React from "react";
import { FaHamburger } from "react-icons/fa";
const Home = () => {
  return (
    <div>
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
