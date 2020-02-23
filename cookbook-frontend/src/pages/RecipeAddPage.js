import React, { Component } from "react";
import styled from "styled-components";
import shortid from "shortid";
import { connect } from "react-redux";
import {addRecipe } from "../redux/recipeOperations";
import { Redirect } from "react-router-dom";
import {Button} from "../components/ui"
const Form = styled.form`
  width: 40%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;
const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  outline: none;
`;
const Textarea = styled.textarea`
  margin-bottom: 10px;
  height: 200px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  outline: none;
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
    console.log(e.target.name);
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
    console.log("state", this.state);
    const recipe = {
      id: shortid.generate(),
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
      <Form onSubmit={this.handleSubmit}>
        <Input
          placeholder="Recipe name"
          onChange={this.handleChange}
          name="recipeName"
        />
        <Textarea
          placeholder="Write recipe description"
          onChange={this.handleChange}
          name="recipeDescription"
        ></Textarea>
        <Button type="submit">add</Button>
      </Form>
    ) : (
      <Redirect to="/" />
    );
  }
}

// const mapStateToProps = (state) => ({

// })

const mapDispatchToProps = {
  addRecipe
};

export default connect(null, mapDispatchToProps)(RecipeAddPage);
