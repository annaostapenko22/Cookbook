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
  recipeEditError,
  oldRecipeAddStart,
  oldRecipeAddSuccess,
  oldRecipeAddError,
  fetchOldRecipesStart,
  fetchOldRecipesSuccess,
  fetchOldRecipesError,
  recipeDeleteStart,
  recipeDeleteSuccess,
  recipeDeleteError
} from "../actions/recipe";

export const fetchAllRecipes = () => async dispatch => {
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
  } catch (err) {
    dispatch(recipeEditError(err));
  }
};

export const addOldRecipe = recipe => async dispatch => {
  dispatch(oldRecipeAddStart());
  const oldRecipe = { ...recipe, refRecipeId: recipe._id };
  delete oldRecipe._id;
  console.log("oldrecipe", oldRecipe)
  try {
    const result = await axios.post(
      "http://localhost:8080/api/recipes/old",
      oldRecipe
    );
    console.log("RESULT HERE=>", result)
    dispatch(oldRecipeAddSuccess(result));
  } catch (err) {
    dispatch(oldRecipeAddError(err));
  }
};

export const fetchOldRecipes = id => async dispatch => {
  dispatch(fetchOldRecipesStart());
  try {
    const result = await axios.get(
      `http://localhost:8080/api/recipes/old/${id}`
    );
    console.log("result !!!", result)
    dispatch(fetchOldRecipesSuccess(result));
  } catch (err) {
    dispatch(fetchOldRecipesError(err));
  }
};

export const deleteRecipe = (id) => async dispatch => {
  dispatch(recipeDeleteStart());
  
  try {
    const result = await axios.put(
      `http://localhost:8080/api/recipes/${id}`,
      {isActive: false}
    );
    dispatch(recipeDeleteSuccess(result.data));
  } catch (err) {
    dispatch(recipeDeleteError(err));
  }
};
