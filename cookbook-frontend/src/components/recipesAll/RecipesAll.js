import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllRecipes } from "../../redux/recipeOperations";

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
class RecipeForm extends Component {
    
  state = {
    recipes: []
  };

  async componentDidMount() {
    await this.props.fetchAllRecipes();
    await this.setState({ recipes: this.props.recipes });
    console.log("data=>", this.props.recipes);
  }

  render() {
    return (
      <Container>
        <Title>All recipes</Title>
        <ul>
          {this.state.recipes.map(recipe => (
            <li key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p>{recipe.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  recipes: state.recipes
});

const mapDispatchToProps = {
  fetchAllRecipes
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeForm);
