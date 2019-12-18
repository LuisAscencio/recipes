import React from "react";
import MdPizza from "react-ionicons/lib/MdPizza";
const Home = () => {
  return (
    <div className="home">
      <div className="groupButtons">
        <MdPizza shake={true} fontSize="400px" color="white" />
        <button className="homeButtons">Recipes Vault</button>
        <button className="homeButtons2">My recipes</button>
      </div>
      <canvas width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Home;
