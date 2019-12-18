import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="groupButtons">
        <image src="../public/logo512.png" alt="" />

        <button className="homeButtons">Recipes Vault</button>
        <button className="homeButtons2">My recipes</button>
      </div>
      <canvas width={window.innerWidth} height={window.innerHeight} />
    </div>
  );
};

export default Home;
