import React from "react";

const Recipe = ({ title, calories, image }) => {
  return (
    <div>
      <h1>{title}</h1>

      <img src={image} alt="" />
      <p>Calories: {calories}</p>
    </div>
  );
};

export default Recipe;
