import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const BtnGoToRecipe = styled.button`
background-color: white;
border-radius: 5px;
border: solid 2px #7676e3;
padding: 5px;
cursor: pointer;
color: #7676e3;
font-weight: bold;
outline: none;
:hover{
  transform: scale(1.1)
}
`

const RecipeItem = ({
  id,
  name,
  description,
  history,
  handleGoToRecipeClick
}) => {
  const handleGoToRecipePageClick = () => {
    handleGoToRecipeClick();
  };

  return (
    <li key={id}>
      <h3>{name}</h3>
      <p>{description}</p>
      <BtnGoToRecipe type="submit" onClick={handleGoToRecipePageClick}>
        Go to recipe
      </BtnGoToRecipe>
    </li>
  );
};

export default withRouter(RecipeItem);
