import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import RecipeCard from "./RecipeCard";

function GetRecipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("recipes")
      .onSnapshot(snapshot => {
        // debugger;
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setRecipes(newRecipes);
      });
  }, []);
  return recipes;
}

const UserRecipes = () => {
  const recipes = GetRecipes();
  // const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("chicken");

  // const getRecipes = () => {};

  // const updateSearch = e => {
  //   setSearch(e.target.value);
  // };

  // const getSearch = e => {
  //   e.preventDefault();
  //   setQuery(search);
  //   setSearch("");
  // };

  return (
    <div>
      <div className="jumbotron bg-danger  ">
        <h1 className="titleRed">My Recipes</h1>
        <form>
          <div className="form-row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Search recipe"
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
          <div key={item.id}>
            <br />

            <RecipeCard
              title={item.title}
              image={item.imageLink}
              // calories={item.recipe.calories}
              ingredients={item.recipeIngredients}
              website={item.recipeLink}
              serves={item.serves}
            />

            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRecipes;
