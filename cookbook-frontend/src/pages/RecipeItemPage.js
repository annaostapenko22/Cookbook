import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOneRecipe } from "../redux/recipeOperations";
import { withRouter } from "react-router-dom";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import styled from "styled-components";

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
  width: 100px;
`;
const BtnEdit = styled.button`
  width: 50px;
  background-color: white;
  border-radius: 5px;
  border: solid 2px #7676e3;
  padding: 5px;
  cursor: pointer;
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
  border-radius: 50px;
  display: inline-block;
  cursor: pointer;
  font-size: 12px;
  margin-bottom: 20px;
  border: 1px solid #cfa0c5;
  font-weight: 700;
  outline: none;
  :hover {
    text-shadow: 0px 0px 6px rgba(255, 255, 255, 1);
    transition: all 0.4s ease 0s;
    box-shadow: 0px 0px 5px 2px rgba(235, 170, 235, 1);
  }
`;

const Text = styled.p`
  width: 50%;
`;
const Form = styled.form`
  width: 40%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* padding: 50px 0; */
`;

const Input = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  border-radius: 15px;
  outline: none;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  height: 200px;
  width: 100%;
  border: solid 3px #7676e3;
  padding: 5px;
  border-radius: 20px;
  outline: none;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const BtnSave = styled.button`
  width: 100px;
  background-color: white;
  border-radius: 5px;
  border: solid 2px #23c50a;
  padding: 5px;
  cursor: pointer;
`;
const BtnCancel = styled.button`
  width: 100px;
  background-color: white;
  border-radius: 5px;
  border: solid 2px #dd1818;
  padding: 5px;
  cursor: pointer;
`;
class RecipeItemPage extends Component {
  state = {
    edit: false
  };
  async componentDidMount() {
    this.setState({ edit: false });
    const id = this.props.match.params.id;
    const data = await this.props.fetchOneRecipe(id);
  }

  handleGoBackToAllRecipes = () => {
    const { history } = this.props;
    history.push("/");
  };
  handleEditRecipe = () => {
    this.setState({ edit: true });
  };
  render() {
    const { recipe } = this.props;
    return (
      <Wrapper>
        <BtnBack type="button" onClick={this.handleGoBackToAllRecipes}>
          &larr; Back to all recipes
        </BtnBack>
        {!this.state.edit && (
          <>
            <InnerWrapper>
              <Title>{recipe.name}</Title>
              <BtnEdit onClick={this.handleEditRecipe}>
                <BorderColorIcon />
              </BtnEdit>
            </InnerWrapper>
            <Text>{recipe.description}</Text>
          </>
        )}
        {this.state.edit && (
          <Form>
            <div>
              {/* <h3>{recipe.name}</h3> */}
              <Input value={recipe.name} />
            </div>
            <TextArea value={recipe.description}></TextArea>
            <BtnWrapper>
              <BtnCancel type="button">Cancel</BtnCancel>
              <BtnSave type="submit">save changed</BtnSave>
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
  fetchOneRecipe
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RecipeItemPage)
);
