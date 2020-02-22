import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Loader from "react-loader-spinner";

const RecipesAll = lazy(() =>
  import(
    "../recipesAll/RecipesAll" /* webpackChunkName: "recipeAll page(home-page)" */
  )
);

const RecipeAddPage = lazy(() =>
  import("../../pages/RecipeAddPage" /* webpackChunkName: "recipeAdd page" */)
);

const RecipePage = lazy(() =>
import("../../pages/RecipeItemPage" /* webpackChunkName: "recipeItem page" */)
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Navigation />
        <Suspense
          fallback={
            <Loader
              type="Puff"
              color="#00BFFF"
              height={120}
              width={120}
              timeout={3000}
              className=""
            />
          }
        >
          <Switch>
            <Route path="/" exact component={RecipesAll} />
            <Route path="/recipeAdd" exact component={RecipeAddPage} />
            <Route path="/recipes/:id" exact component={RecipePage}/>
          </Switch>
        </Suspense>
      </>
    );
  }
}

export default App;
