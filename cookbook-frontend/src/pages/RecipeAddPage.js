import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {addRecipe } from "../redux/operations/recipe";
import { Redirect } from "react-router-dom";
import {Button, Input, TextArea, Form} from "../components/ui";


const AddForm = styled(Form)`
  margin: 0 auto;
  align-items: center;
  padding: 50px 0;
`;

const AddNameInput = styled(Input)`
  margin-bottom: 10px;
`;

const AddDescriptionTextarea = styled(TextArea)`
  margin-bottom: 10px;
`;


class RecipeAddPage extends Component {
  state = {
    recipeName: "",
    recipeDescription: "",
    recipeSubmitted: false
  };

  componentDidMount() {
    this.setState({ recipeSubmitted: false });
  }

  handleChange = e => {
    const name = e.target.name;
    const description = e.target.value;
    this.setState(() => {
      return {
        [name]: description
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const recipe = {
      name: this.state.recipeName,
      description: this.state.recipeDescription
    };
    this.props.addRecipe(recipe);
    this.setState({
      recipeName: "",
      recipeDescription: "",
      recipeSubmitted: true
    });
  };
  render() {
    return !this.state.recipeSubmitted ? (
      <AddForm onSubmit={this.handleSubmit}>
        <AddNameInput
          placeholder="Recipe name"
          onChange={this.handleChange}
          name="recipeName"
        />
        <AddDescriptionTextarea
          placeholder="Write recipe description"
          onChange={this.handleChange}
          name="recipeDescription"
        ></AddDescriptionTextarea>
        <Button type="submit">add</Button>
      </AddForm>
    ) : (
      <Redirect to="/" />
    );
  }
}


const mapDispatchToProps = {
  addRecipe
};

export default connect(null, mapDispatchToProps)(RecipeAddPage);
