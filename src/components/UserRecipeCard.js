import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserRecipeCard = ({
  title,
  calories,
  image,
  ingredients,
  website,
  serves,
  directions,
  id
}) => {
  const [getRecipeButton, setRecipeButton] = useState(false);

  const updateRecipeButton = e => {
    setRecipeButton(!getRecipeButton);
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <div
          className="card"
          style={{
            width: "22em",
            flexBasis: "15em"
          }}
        >
          <img className="card-img-top" alt="" src={image} />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-text">Serves: {serves}</h5>
            <p className="card-text">
              Calories: {calories === "???" ? "???" : Math.trunc(calories)}
            </p>

            {getRecipeButton ? (
              <ul>
                {ingredients.map((ingredient, i) => (
                  <li key={i}>{ingredient}.</li>
                ))}
              </ul>
            ) : null}

            <div
              className="btn-group mr-2"
              role="group"
              aria-label="First group"
            >
              <button
                onClick={updateRecipeButton}
                type="button"
                className="btn btn-danger"
              >
                {getRecipeButton ? "Hide ingredients" : "Show Ingredients"}
              </button>
            </div>
            <Link
              to={{
                pathname: `/myrecipes/${id}`,
                state: {
                  title,
                  calories,
                  image,
                  ingredients,
                  website,
                  serves,
                  directions,
                  id
                }
              }}
            >
              <div
                className="btn-group mr-2"
                role="group"
                aria-label="Second group"
              >
                <button type="button" className="btn btn-danger">
                  Directions
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRecipeCard;
