import React from "react";
import firebase from "./firebase";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ApiRecipes from "./components/ApiRecipes";
import NewRecipe from "./components/NewRecipe";
import UserRecipes from "./components/UserRecipes";
import "/Users/luismiguelascencio/Development/RealLife/recipes/src/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

firebase
  .firestore()
  .collection("recipe")
  .add({
    title: "test"
  });

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/newrecipe" exact component={NewRecipe} />
          <Route path="/myrecipes" component={UserRecipes} />
          <Route path="/recipeVault" component={ApiRecipes} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
