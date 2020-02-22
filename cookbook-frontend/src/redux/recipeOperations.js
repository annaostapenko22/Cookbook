import axios from "axios";
import {
  fetchAllRecipesStart,
  fetchAllRecipesSuccess,
  fetchAllRecipesError,
  recipeAddStart,
  recipeAddSuccess,
  recipeAddError
} from "./recipeActions";

export const fetchAllRecipes = recipes => async dispatch => {
  dispatch(fetchAllRecipesStart());
  try {
    const result = await axios.get("http://localhost:8080/recipes");
    dispatch(fetchAllRecipesSuccess(result.data));
    console.log("RESULT",result.data)
  } catch (err) {
    dispatch(fetchAllRecipesError(err));
  }
};

export const addRecipe = recipe => async dispatch => {
  dispatch(recipeAddStart());
  try {
    const result = await axios.post("http://localhost:8080/recipes", recipe);
    dispatch(recipeAddSuccess(result));
    console.log("ADDED",result)
  } catch (err) {
    dispatch(recipeAddError(err));
  }
};
