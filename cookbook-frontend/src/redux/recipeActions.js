import Type from "./recipeTypes";

export const fetchAllRecipesStart = () => ({
  type: Type.FETCH_RECIPES_START
});

export const fetchAllRecipesSuccess = recipes => ({
  type: Type.FETCH_RECIPES_SUCCESS,
  payload: recipes
});

export const fetchAllRecipesError = error => ({
  type: Type.FETCH_RECIPES_SUCCESS,
  payload: error
});

export const fetchOneRecipeStart = () => ({
  type: Type.FETCH_ONE_RECIPE_START
});

export const fetchOneRecipeSuccess = recipe => ({
  type: Type.FETCH_ONE_RECIPE_SUCCESS,
  payload: recipe
});

export const fetchOneRecipeError = error => ({
  type: Type.FETCH_ONE_RECIPE_SUCCESS,
  payload: error
});

export const recipeAddStart = () => ({
  type: Type.RECIPE_ADD_START
});

export const recipeAddSuccess = recipe => ({
  type: Type.RECIPE_ADD_SUCCESS,
  payload: recipe
});

export const recipeAddError = error => ({
  type: Type.RECIPE_ADD_ERROR,
  payload: error
});

export const recipeEditStart = () => ({
  type: Type.RECIPE_EDIT_START
});

export const recipeEditSuccess = recipe => ({
  type: Type.RECIPE_EDIT_SUCCESS,
  payload: {recipe}
});

export const recipeEditError = error => ({
  type: Type.RECIPE_EDIT_ERROR,
  payload: error
});
