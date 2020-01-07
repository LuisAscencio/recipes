import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function UserRecipeCardDetail({ location }) {
  console.log(location.state);
  return (
    <div>
      <div className="card mb-1">
        <img src={location.state.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h3 className="card-title">{location.state.title}</h3>
          <h5 className="card-title">Directions:</h5>

          <ol className="card-text">
            {location.state.directions.map((direction, i) => (
              <li key={i}>{direction}.</li>
            ))}
          </ol>
          <br />
          <h6 className="card-title">Ingredients:</h6>

          <ul className="card-text">
            {location.state.ingredients.map((ingredient, i) => (
              <li key={i}>{ingredient}.</li>
            ))}
          </ul>

          <p className="card-text">
            <small className="text-muted">
              Calories: {location.state.calories}
            </small>
            <br />
            <small className="text-muted">
              Serves: {location.state.serves}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
