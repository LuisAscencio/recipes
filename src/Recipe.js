import React from "react";

const Recipe = ({ title, calories, image }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={image} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Calories: {Math.trunc(calories)}</p>
        <a href="#" className="btn btn-primary">
          Get Recipe
        </a>
      </div>
    </div>
  );
};

export default Recipe;
