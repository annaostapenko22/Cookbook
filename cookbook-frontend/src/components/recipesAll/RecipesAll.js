import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  fetchAllRecipes,
  fetchOldRecipes,
  deleteRecipe
} from "../../redux/operations/recipe";
import RecipeItem from "../recipeItem/RecipeItem";
import { withRouter } from "react-router-dom";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  font-size: 28px;
`;

const RecipeList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  width: 60%;
  font-family: sans-serif;
  font-size: 12px;
`;

class RecipesAll extends Component {
  async componentDidMount() {
    await this.props.fetchAllRecipes();
  }

  handleGoToRecipeClick = id => {
    this.props.history.push(`/recipes/${id}`);
  };

  handleDeleteRecipe = id => {
    this.props.deleteRecipe(id);
  };
  render() {
    return (
      <Container>
        <Title>All recipes</Title>
        <RecipeList>
          {this.props.recipes.length &&
            this.props.recipes.map(recipe => (
              <RecipeItem
                {...recipe}
                key={recipe._id}
                handleGoToRecipeClick={() =>
                  this.handleGoToRecipeClick(recipe._id)
                }
                handleDeleteRecipe={() => this.handleDeleteRecipe(recipe._id)}
              />
            ))}
        </RecipeList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = {
  fetchAllRecipes,
  fetchOldRecipes,
  deleteRecipe
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipesAll)
);
