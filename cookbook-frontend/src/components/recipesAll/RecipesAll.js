import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { fetchAllRecipes } from "../../redux/recipeOperations";
import RecipeItem from "../recipeItem/RecipeItem"
import {withRouter} from "react-router-dom"
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
/* height: 100px;
overflow: auto; */
`

// const RecipeItem = styled.li`
// :hover {
// cursor: pointer;
// /* transform: scale(1.1); */
// }
// `
const RecipeItemText = styled.p`
:hover {
  text-shadow: 0px 0px 6px rgba(25, 255, 255, 1);
transition: all 0.4s ease 0s;
}
`
class RecipeForm extends Component {
    
  state = {
    recipes: []
  };

  async componentDidMount() {
    await this.props.fetchAllRecipes();
    await this.setState({ recipes: this.props.recipes });
    console.log("data=>", this.props.recipes);
  }
  handleGoToRecipeClick = (id) => {
    // console.log(e.currentTarget.closest("li"))
        this.props.history.push(`/recipes/${id}`);
      };
  render() {
    return (
      <Container>
        <Title>All recipes</Title>
        <RecipeList>
          {this.state.recipes.map(recipe => (
           <RecipeItem {...recipe} key={recipe.id} handleGoToRecipeClick={()=> this.handleGoToRecipeClick(recipe.id)}/>
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
  fetchAllRecipes
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecipeForm));
