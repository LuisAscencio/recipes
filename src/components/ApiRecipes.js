import React, { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import "/Users/luismiguelascencio/Development/RealLife/recipes/src/App.css";
let foodsArray = [
  "beef",
  "chicken",
  "fish",
  "tomato",
  "beets",
  "carrots",
  "salad",
  "pork",
  "onion",
  "corn",
  "cilantro",
  "potato",
  "Zucchini",
  "pasta",
  "brussels sprouts",
  "mango",
  "cantaloupe",
  "avocado",
  "rice",
  "lime",
  "sesame",
  "pistachios",
  "coconut",
  "serrano chiles",
  "bell peppers",
  "cucumber",
  "shrimp",
  "lobster",
  "prawn",
  "olives",
  "sushi",
  "thai",
  "indian",
  "mexican",
  "greek",
  "italian",
  "french",
  "vietnamese",
  "chinese",
  "japanese",
  "mediterranean",
  "korean",
  "noodle",
  "caribbean",
  "american",
  "russian",
  "eggplant",
  "oranges",
  "apple",
  "pear",
  "grape",
  "strawberry",
  "blueberry",
  "banana",
  "bacon",
  "prosciutto",
  "cabbage",
  "sweet potato",
  "shallot",
  "asparagus",
  "peas",
  "milk",
  "butter",
  "cherry"
];
let randomElement = foodsArray[Math.floor(Math.random() * foodsArray.length)];

function ApiRecipes() {
  const APP_ID = `2b747fc4`;
  const APP_KEY = `d4e5d53d398f73289e4ed5fca4d38690	`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState(randomElement);

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
    <div>
      <div className="jumbotron bg-danger">
        <h1 className="titleRed">Recipe Vault</h1>
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

export default ApiRecipes;
