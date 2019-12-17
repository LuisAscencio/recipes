import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

function App() {
  const APP_ID = `2b747fc4`;
  const APP_KEY = `d4e5d53d398f73289e4ed5fca4d38690	`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    ).then(response => {
      response.json().then(data => {
        setRecipes(data.hits);
        console.log(data.hits);
      });
    });
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      <h1>Recipes</h1>
      <form onSubmit={getSearch}>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="search recipe"
              onChange={updateSearch}
              value={search}
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Search
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      {recipes.map(item => (
        <div key={item.recipe.calories + 4}>
          <br />
          <Recipe
            title={item.recipe.label}
            image={item.recipe.image}
            calories={item.recipe.calories}
            ingredients={item.recipe.ingredients}
          />
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
