import React from "react";

const RecipeCard = ({ title, calories, image, ingredients }) => {
  return (
    <div className="row">
      <div className="col-sm-6">
        <div className="card" style={{ width: "30em" }}>
          <img className="card-img-top" src={image} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <ol>
              {ingredients.map(ingredient => (
                <li>{ingredient.text}.</li>
              ))}
            </ol>
            <p className="card-text">Calories: {Math.trunc(calories)}</p>
            <button type="submit" className="btn btn-danger">
              Get Ingredients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
