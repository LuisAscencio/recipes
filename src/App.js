import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = `2b747fc4`;
  const APP_KEY = `d4e5d53d398f73289e4ed5fca4d38690	`;
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    ).then(response => {
      response.json().then(data => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
    });
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      <h1>Recipes</h1>
      <form>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="search recipe"
            />
          </div>
          <button type="button" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      {recipes.map(item => (
        <Recipe
          key={item.recipe.calories + 4}
          title={item.recipe.label}
          calories={item.recipe.calories}
          image={item.recipe.image}
        />
      ))}
    </div>
  );
}

export default App;
