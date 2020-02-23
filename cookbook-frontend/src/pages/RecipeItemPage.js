import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOneRecipe, editRecipe } from "../redux/recipeOperations";
import { withRouter } from "react-router-dom";
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
const BtnEdit = styled.button`
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
const BtnBack = styled(Button)`
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

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BtnSave = styled(Button)`
  background-color: white;
  border: solid 2px #23c50a;
  color: #23c50a;
  width: 100px;
  :hover {
    background-color: #23c50a;
  }
`;
const BtnCancel = styled(Button)`
  width: 100px;
  border: solid 2px #dd1818;
  color: #dd1818;
  :hover {
    background-color: #dd1818;
  }
`;

const BtnDelete = styled(Button)`
  border: solid 2px #dd1818;
  color: #dd1818;
  width: 100px;
  :hover {
    background-color: #dd1818;
  }
`;
class RecipeItemPage extends Component {
  state = {
    edit: false,
    name: "",
    description: ""
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    const data = await this.props.fetchOneRecipe(id);
    this.setState({
      edit: false,
      name: this.props.recipe.name,
      description: this.props.recipe.description
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
    this.props.editRecipe(this.props.recipe._id, editedRecipe);
    this.setState({ edit: false });
  };

  handleCancel = () => {
    this.setState({ edit: false });
  };

  render() {
    const { recipe } = this.props;
    return (
      <Wrapper>
        <BtnBack type="button" onClick={this.handleGoBackToAllRecipes}>
          &larr; Back
        </BtnBack>
        {!this.state.edit && (
          <>
            <InnerWrapper>
              <Title>{recipe.name}</Title>
            </InnerWrapper>
            <Text>{recipe.description}</Text>
            <InnerWrapper>
              <BtnEdit onClick={this.handleEditRecipe}>
                <BorderColorIcon />
              </BtnEdit>
              <BtnDelete>delete</BtnDelete>
            </InnerWrapper>
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
            <BtnWrapper>
              <BtnCancel type="button" onClick={this.handleCancel}>
                Cancel
              </BtnCancel>
              <BtnSave type="submit">Save</BtnSave>
            </BtnWrapper>
          </Form>
        )}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipe
});

const mapDispatchToProps = {
  fetchOneRecipe,
  editRecipe
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeItemPage)
);
