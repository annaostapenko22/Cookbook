import axios from "axios";
import {
  fetchAllRecipesStart,
  fetchAllRecipesSuccess,
  fetchAllRecipesError,
  recipeAddStart,
  recipeAddSuccess,
  recipeAddError,
  fetchOneRecipeStart,
  fetchOneRecipeSuccess,
  fetchOneRecipeError,
  recipeEditStart,
  recipeEditSuccess,
  recipeEditError
} from "./recipeActions";

export const fetchAllRecipes = recipes => async dispatch => {
  dispatch(fetchAllRecipesStart());
  try {
    const result = await axios.get("http://localhost:8080/api/recipes");
    dispatch(fetchAllRecipesSuccess(result.data));
  } catch (err) {
    dispatch(fetchAllRecipesError(err));
  }
};

export const fetchOneRecipe = id => async dispatch => {
  dispatch(fetchOneRecipeStart());
  try {
    const result = await axios.get(`http://localhost:8080/api/recipes/${id}`);
    dispatch(fetchOneRecipeSuccess(result.data));
    console.log("ONE RECIPE", result.data);
  } catch (err) {
    dispatch(fetchOneRecipeError(err));
  }
};

export const addRecipe = recipe => async dispatch => {
  dispatch(recipeAddStart());
  try {
    const result = await axios.post(
      "http://localhost:8080/api/recipes",
      recipe
    );
    dispatch(recipeAddSuccess(result));
    console.log("ADDED", result);
  } catch (err) {
    dispatch(recipeAddError(err));
  }
};

export const editRecipe = (id, recipe) => async dispatch => {
  dispatch(recipeEditStart());
  try {
    const result = await axios.put(
      `http://localhost:8080/api/recipes/${id}`,
      recipe
    );
    dispatch(recipeEditSuccess(recipe));
    console.log("UPDATED RECIPE",recipe);
  } catch (err) {
    dispatch(recipeEditError(err));
  }
};
