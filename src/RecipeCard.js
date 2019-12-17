import React, { useState } from "react";

const RecipeCard = ({ title, calories, image, ingredients }) => {
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
            {getRecipeButton ? (
              <ol>
                {ingredients.map((ingredient, i) => (
                  <li key={ingredients.length / i - 3}>{ingredient.text}.</li>
                ))}
              </ol>
            ) : null}

            <p className="card-text">Calories: {Math.trunc(calories)}</p>
            <button
              onClick={updateRecipeButton}
              type="button"
              className="btn btn-danger"
            >
              Get Ingredients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
