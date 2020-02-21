import Type from "./recipeTypes";

export const recipeAddStart = () => ({
    type: Type.RECIPE_ADD_START
})

export const recipeAddSuccess = (recipe) => ({
    type: Type.RECIPE_ADD_SUCCESS,
    payload: recipe
})

export const recipeAddError = (error) => ({
    type: Type.RECIPE_ADD_ERROR,
    payload: error
})