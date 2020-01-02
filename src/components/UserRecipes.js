import React, { useEffect, useState } from "react";
import firebase from "../firebase";
import UserRecipeCard from "./UserRecipeCard";

const UserRecipes = () => {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection("recipes")

  //     .onSnapshot(snapshot => {
  //       const newRecipes = snapshot.docs.map(doc => ({
  //         id: doc.id,
  //         ...doc.data()
  //       }));
  //       setRecipes(newRecipes);
  //     });
  // }, []);

  useEffect(() => {
    firebase
      .firestore()
      .collection("recipes")
      .get()
      .then(snapshot => {
        const newRecipes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (search === "") {
          setRecipes(newRecipes);
        } else {
          setRecipes(
            newRecipes.filter(recipe =>
              recipe.title.toLowerCase().includes(search)
            )
          );
        }

        console.log(recipes);
      });
  }, [search]);

  // async function filteredRecipes(recipes) {
  //   let filteredRecipes = await recipes;
  //   console.log(recipes);

  //   // recipes.filter(recipe => {
  //   //   recipe.title === search;
  //   // });
  // }
  // filteredRecipes(recipes);

  // const [recipes, setRecipes] = useState([]);
  // const [search, setSearch] = useState("");
  // const [query, setQuery] = useState("chicken");

  // const getRecipes = () => {};

  const updateSearch = e => {
    setSearch(e.target.value);
  };

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
                value={search}
                onChange={updateSearch}
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

            <UserRecipeCard
              title={item.title}
              image={item.imageLink}
              calories={item.calories}
              ingredients={item.recipeIngredients}
              website={item.recipeLink}
              serves={item.serves}
              vegan={item.vegan}
            />
            <br />
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRecipes;
