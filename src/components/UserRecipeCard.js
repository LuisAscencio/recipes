import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const UserRecipeCard = ({
  fileName,
  title,
  calories,
  image,
  ingredients,
  website,
  serves,
  vegan,
  directions,
  id
}) => {
  const [getRecipeButton, setRecipeButton] = useState(false);
  const [updatedImage, setUpdatedImage] = useState("");

  useEffect(() => {
    checkImage();
  }, []);

  const checkImage = () => {
    if (image === "") {
      setUpdatedImage(
        "https://www.incimages.com/uploaded_files/image/970x450/getty_855098134_353411.jpg"
      );
    } else {
      setUpdatedImage(image);
    }
  };

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
          <img
            className="card-img-top"
            alt=""
            src={image ? image : updatedImage}
          />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <h5 className="card-text">Serves: {serves}</h5>
            <p className="card-text">
              Calories:{" "}
              {calories === "No info" ? "No info" : Math.trunc(calories)}
            </p>
            <p className="card-text">Vegan: {vegan ? vegan : "No"}</p>

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
                  fileName,
                  title,
                  calories,
                  image: updatedImage,
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
