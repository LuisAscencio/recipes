import React from "react";
import UserFormToEdit from "./components/UserFormToEdit";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ApiRecipes from "./components/ApiRecipes";
import NewRecipe from "./components/NewRecipe";
import UserRecipes from "./components/UserRecipes";
import UserRecipeCardDetail from "./components/UserRecipeCardDetail";
import "/Users/luismiguelascencio/Development/RealLife/recipes/src/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/home" exact component={Home} />
          <Route path="/newrecipe" exact component={NewRecipe} />
          <Route path="/myrecipes" exact component={UserRecipes} />
          <Route path="/recipeVault" component={ApiRecipes} />
          <Route path="/myrecipes/:id" component={UserRecipeCardDetail} />
          <Route path="/edit/:id" component={UserFormToEdit} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
