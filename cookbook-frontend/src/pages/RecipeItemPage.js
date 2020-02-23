import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchOneRecipe,
  editRecipe,
  addOldRecipe,
  fetchOldRecipes,
  deleteRecipe
} from "../redux/operations/recipe";
import { withRouter, Redirect } from "react-router-dom";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import styled from "styled-components";
import { Button, Input, TextArea, Form } from "../components/ui";

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  width: 50px;
`;

const ButtonEdit = styled.button`
  width: 50px;
  background-color: white;
  border-radius: 5px;
  border: solid 2px #ffd817;
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
  margin-right: 10px;
  outline: none;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const ButtonBack = styled(Button)`
  padding: 5px;
  margin-bottom: 20px;
`;

const Text = styled.p`
  width: 50%;
`;

const ItemInput = styled(Input)`
  margin-bottom: 10px;
`;

const ItemTextArea = styled(TextArea)`
  margin-bottom: 10px;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const ButtonSave = styled(Button)`
  background-color: white;
  border: solid 2px #23c50a;
  color: #23c50a;
  width: 100px;
  :hover {
    background-color: #23c50a;
  }
`;

const ButtonCancel = styled(Button)`
  width: 100px;
  border: solid 2px #dd1818;
  color: #dd1818;
  :hover {
    background-color: #dd1818;
  }
`;

const ButtonDelete = styled(Button)`
  border: solid 2px #dd1818;
  color: #dd1818;
  width: 100px;
  :hover {
    background-color: #dd1818;
  }
`;
const ButtonOldVersionsRecipes = styled(Button)`
  margin-right: 10px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-family: sans-serif;
`;
class RecipeItemPage extends Component {
  state = {
    edit: false,
    name: "",
    description: "",
    deleteSubmitted: false,
    areOldVersions: false
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    await this.props.fetchOneRecipe(id);
    this.setState({
      edit: false,
      name: this.props.recipe.name,
      description: this.props.recipe.description,
      deleteSubmitted: false,
      areOldVersions: false
    });
  }

  handleGoBackToAllRecipes = () => {
    const { history } = this.props;
    history.push("/");
  };

  handleEditRecipe = () => {
    this.setState({ edit: true });
  };

  handleChangeSaveChanges = e => {
    const name = e.target.name;
    const description = e.target.value;
    const editedRecipe = {
      [name]: description
    };
    this.setState(state => {
      return {
        ...state,
        ...editedRecipe
      };
    });
  };

  handleSubmitSaveChanges = e => {
    e.preventDefault();
    const editedRecipe = {
      ...this.props.recipe,
      name: this.state.name,
      description: this.state.description
    };

    this.props.addOldRecipe(this.props.recipe);
    this.props.editRecipe(this.props.recipe._id, editedRecipe);
    this.setState({ edit: false, areOldVersions: false });
  };

  handleCancel = () => {
    this.setState({ edit: false });
  };

  handleDelete = async () => {
    await this.props.deleteRecipe(this.props.recipe._id);
    this.setState({ deleteSubmitted: true });
  };

  showRecipesOldVersions = async id => {
    const res = await this.props.fetchOldRecipes(id);
    this.setState({ areOldVersions: true });
  };

  render() {
    const { recipe } = this.props;
    return !this.state.deleteSubmitted ? (
      <Wrapper>
        <ButtonBack type="button" onClick={this.handleGoBackToAllRecipes}>
          &larr; Back
        </ButtonBack>
        {!this.state.edit && (
          <>
            <InnerWrapper>
              <Title>{recipe.name}</Title>
            </InnerWrapper>
            <Text>{recipe.description}</Text>
            <InnerWrapper>
              <ButtonOldVersionsRecipes
                type="button"
                onClick={() => this.showRecipesOldVersions(recipe._id)}
              >
                old versions
              </ButtonOldVersionsRecipes>
              <ButtonEdit onClick={this.handleEditRecipe}>
                <BorderColorIcon />
              </ButtonEdit>
              <ButtonDelete onClick={this.handleDelete}>delete</ButtonDelete>
            </InnerWrapper>
            {this.state.areOldVersions && (
              <List>
                {this.props.recipes.map(recipe => (
                  <li key={recipe._id}>
                    <h4>{recipe.name}</h4>
                    <p>{recipe.description}</p>
                    <p>Created: {recipe.creationDate}</p>
                  </li>
                ))}
              </List>
            )}
            {this.state.areOldVersions && !this.props.recipes.length && (
              <p>No old versions yet</p>
            )}
          </>
        )}
        {this.state.edit && (
          <Form onSubmit={this.handleSubmitSaveChanges}>
            <div>
              <ItemInput
                value={this.state.name}
                onChange={this.handleChangeSaveChanges}
                name="name"
              />
            </div>
            <ItemTextArea
              value={this.state.description}
              onChange={this.handleChangeSaveChanges}
              name="description"
            ></ItemTextArea>
            <ButtonsWrapper>
              <ButtonCancel type="button" onClick={this.handleCancel}>
                Cancel
              </ButtonCancel>
              <ButtonSave type="submit">Save</ButtonSave>
            </ButtonsWrapper>
          </Form>
        )}
      </Wrapper>
    ) : (
      <Redirect to="/" />
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe,
  recipes: state.recipes
});

const mapDispatchToProps = {
  fetchOneRecipe,
  editRecipe,
  addOldRecipe,
  deleteRecipe,
  fetchOldRecipes
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeItemPage)
);
