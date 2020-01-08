import React from "react";
import { FaHamburger } from "react-icons/fa";
import { Shake, ShakeHard } from "reshake";
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
          <ShakeHard>
            <FaHamburger size="250px" color="white" />
          </ShakeHard>
        </div>
        <br />

        <h2 className="title ">Recipes</h2>

        <canvas width={window.innerWidth} height={window.innerHeight} />
      </div>
    </div>
  );
};

export default Home;
