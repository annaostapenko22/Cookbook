import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOneRecipe, editRecipe } from "../redux/recipeOperations";
import { withRouter } from "react-router-dom";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import styled from "styled-components";
import { Button } from "../components/ui";
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
  border: solid 2px #7676e3;
  padding: 5px;
  cursor: pointer;
  font-size: 12px;
`;

const InnerWrapper = styled.div`
  display: flex;
`;
const BtnBack = styled.button`
  width: 150px;
  margin-bottom: 20px;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  background: #7676e3;
  padding: 5px;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 20px;
  border: solid 3px #7676e3;
  font-weight: 700;
  outline: none;
  :hover {
    background: #fff;
    color: #7676e3;
  }
`;

const Text = styled.p`
  width: 50%;
`;
const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  outline: none;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 200px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  outline: none;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BtnSave = styled.button`
  width: 100px;
  background-color: white;
  border: solid 2px #23c50a;
  padding: 5px;
  cursor: pointer;
`;
const BtnCancel = styled.button`
  width: 100px;
  background-color: white;
  border: solid 2px #dd1818;
  padding: 5px;
  cursor: pointer;
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
    this.props.editRecipe(this.props.recipe.id, editedRecipe);
    this.setState({ edit: false });
  };

  handleCancel = ()=> {
    this.setState({edit: false})
  }

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
            <BtnEdit onClick={this.handleEditRecipe}>
              <BorderColorIcon />
            </BtnEdit>
          </>
        )}
        {this.state.edit && (
          <Form onSubmit={this.handleSubmitSaveChanges}>
            <div>
              <Input
                value={this.state.name}
                onChange={this.handleChangeSaveChanges}
                name="name"
              />
            </div>
            <TextArea
              value={this.state.description}
              onChange={this.handleChangeSaveChanges}
              name="description"
            ></TextArea>
            <BtnWrapper>
              <BtnCancel type="button" onClick={this.handleCancel}>Cancel</BtnCancel>
              <BtnSave type="submit">Save changes</BtnSave>
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
