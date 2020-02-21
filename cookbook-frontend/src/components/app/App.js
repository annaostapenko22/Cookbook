import React, { Component } from "react";
import {Switch, Route} from "react-router-dom"
import RecipesAll from "../recipesAll/RecipesAll";
import Navigation from "../navigation/Navigation";
import RecipeAddPage from "../../pages/RecipeAddPage";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation />
        <Switch>
            <Route path="/" exact component={RecipesAll}/>
            <Route path="/recipeAdd" exact component={RecipeAddPage}/>
        </Switch>
      </>
    );
  }
}

export default App;
