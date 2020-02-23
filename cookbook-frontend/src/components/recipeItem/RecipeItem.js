import React from "react";
import { withRouter } from "react-router-dom";
import {Button} from "../ui"


const RecipeItem = ({
  name,
  description,
  handleGoToRecipeClick,
  creationDate
}) => {
  const handleGoToRecipePageClick = () => {
    handleGoToRecipeClick();
  };

  return (
    <li>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Created: {creationDate} </p>
      <Button type="submit" onClick={handleGoToRecipePageClick}>
        Go to recipe
      </Button>
    </li>
  );
};

export default withRouter(RecipeItem);
