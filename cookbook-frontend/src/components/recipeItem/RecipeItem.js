import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import {Button} from "../ui"


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
      <Button type="submit" onClick={handleGoToRecipePageClick}>
        Go to recipe
      </Button>
    </li>
  );
};

export default withRouter(RecipeItem);
