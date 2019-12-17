import React, { useState } from "react";

const RecipeCard = ({ title, calories, image, ingredients, website }) => {
  const [getRecipeButton, setRecipeButton] = useState(false);

  const updateRecipeButton = e => {
    setRecipeButton(!getRecipeButton);
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card" style={{ width: "30em" }}>
          <img className="card-img-top" alt="" src={image} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">Calories: {Math.trunc(calories)}</p>
            {getRecipeButton ? (
              <ol>
                {ingredients.map((ingredient, i) => (
                  <li key={ingredients.length / i - 3}>{ingredient.text}.</li>
                ))}
              </ol>
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
                Get Ingredients
              </button>
            </div>
            <div
              className="btn-group mr-2"
              role="group"
              aria-label="Second group"
            >
              <a href={`${website}`} className="btn btn-danger">
                Full Recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
