import React, { useState } from "react";
import firebase from "../firebase";
const NewRecipe = () => {
  const [title, setTitle] = useState("");
  const [recipeLink, setRecipeLink] = useState("");
  const [recipeIngredients, setRecipeIngredients] = useState([]);
  const [imageLink, setImageLink] = useState("");
  const [serves, setServes] = useState(Number);
  const [vegan, setVegan] = useState("No");
  const [calories, setCalories] = useState("");
  const [directions, setDirections] = useState([]);

  const storeToDataBase = e => {
    e.preventDefault();
    recipeIngredients.length === 0 || directions.length === 0
      ? alert("Please add ingredients and directions before saving recipe")
      : firebase
          .firestore()
          .collection("recipes")
          .add({
            title,
            recipeLink,
            imageLink,
            serves: serves === 0 ? "???" : serves,
            vegan,
            directions: directions.split(/\n/),
            calories: calories ? parseInt(calories) : "???",
            recipeIngredients: recipeIngredients.split(/\n/)
          })
          .then(() => {
            setTitle("");
            setImageLink("");
            setRecipeIngredients("");
            setDirections("");
            setRecipeLink("");
            setServes(1);
            setVegan(false);
            setCalories("");
            setDirections("");
          })
          .then(alert("Recipe saved"));
  };

  return (
    <div
      style={{
        flexBasis: "10em",
        marginLeft: "10px",
        marginRight: "10px"
      }}
    >
      <br />

      <form onSubmit={storeToDataBase}>
        <div className="form-row ">
          <div className="form-group col-md-6">
            <label htmlFor="recipeTitle">Recipe title</label>
            <input
              placeholder="Al pastor tacos"
              type="text"
              className="form-control"
              id="recipeTitle"
              value={title}
              onChange={e => {
                setTitle(e.currentTarget.value);
              }}
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="recipeLink">Recipe link</label>
            <input
              type="text"
              placeholder="www.lostacosnumberone.com"
              className="form-control"
              id="recipeLink"
              value={recipeLink}
              onChange={e => {
                setRecipeLink(e.currentTarget.value);
              }}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="recipeDirections">Recipe ingredients</label>
          <textarea
            className="form-control"
            id="recipeDirections"
            rows="5"
            placeholder="Enter one ingredient per line"
            value={recipeIngredients}
            onChange={e => {
              setRecipeIngredients(e.currentTarget.value);
            }}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="recipeIngredients">Directions</label>
          <textarea
            className="form-control"
            id="recipeIngredients"
            rows="5"
            placeholder="Enter one instruction per line"
            value={directions}
            onChange={e => {
              setDirections(e.currentTarget.value);
            }}
          ></textarea>
        </div>

        <div className="form-row">
          <div className="form-group col-md-4">
            <label htmlFor="imagelink">Image link</label>
            <input
              type="text"
              placeholder="www.myimage.com"
              className="form-control"
              id="imagelink"
              value={imageLink}
              onChange={e => {
                setImageLink(e.currentTarget.value);
              }}
            />
          </div>

          <div className="form-group col-md-1">
            <label htmlFor="calories">Calories</label>
            <input
              type="number"
              className="form-control"
              id="calories"
              value={calories}
              onChange={e => {
                setCalories(e.currentTarget.value);
              }}
            />
          </div>

          <div className="form-group col-md-1">
            <label htmlFor="servings">Servings</label>
            <select
              id="servings"
              type="number"
              className="form-control"
              value={serves}
              onChange={e => {
                setServes(e.currentTarget.value);
              }}
            >
              <option defaultValue>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
          </div>
          <div className="form-group col-md-1">
            <label htmlFor="vegan">Vegan</label>
            <select
              id="vegan"
              className="form-control"
              value={vegan}
              onChange={e => {
                setVegan(e.currentTarget.value);
              }}
            >
              <option defaultValue>No</option>
              <option>Yes</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn btn-danger">
          Save recipe
        </button>
      </form>
    </div>
  );
};

export default NewRecipe;
