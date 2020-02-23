import React, { Component, Suspense, lazy } from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "../navigation/Navigation";
import Loader from "react-loader-spinner";
import styled from "styled-components";
import {connect} from "react-redux"
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

const LoaderWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

class App extends Component {
  state = {};
  render() {
    console.log("this props loading", this.props.loading)
    return (
      <>
        <Navigation />
        <Suspense
          fallback={
            <LoaderWrapper>
              <Loader
                type="Puff"
                color="#00BFFF"
                height={120}
                width={120}
                timeout={3000}
              />
            </LoaderWrapper>
          }
        >
          <Switch>
            <Route path="/" exact component={RecipesAll} />
            <Route path="/recipeAdd" exact component={RecipeAddPage} />
            <Route path="/recipes/:id" exact component={RecipePage} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: state.loading
})


export default connect(mapStateToProps)(App);
