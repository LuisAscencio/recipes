import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";

function UserRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    // fetch(
    //   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    // ).then(response => {
    //   response.json().then(data => {
    //     setRecipes(data.hits);
    //     console.log(data.hits);
    //   });
    // });
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
    <div>
      <div className="jumbotron bg-danger  ">
        <h1 className="titleRed">My Recipes</h1>
        <form onSubmit={getSearch}>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Search recipe"
                onChange={updateSearch}
                value={search}
              />
            </div>
            <button type="submit" className="btn btn-outline-light">
              Search
            </button>
          </div>
        </form>
      </div>
      <br />
      <br />
      <br />
      <div className="recipes">
        {recipes.map(item => (
          <div key={item.recipe.calories + 4}>
            <br />

            <RecipeCard
              title={item.recipe.label}
              image={item.recipe.image}
              calories={item.recipe.calories}
              ingredients={item.recipe.ingredients}
              website={item.recipe.url}
              serves={item.recipe.yield}
            />

            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserRecipes;