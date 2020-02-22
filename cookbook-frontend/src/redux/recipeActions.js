import Type from "./recipeTypes";

export const fetchAllRecipesStart = ()=> ({
    type: Type.FETCH_RECIPES_START
})

export const fetchAllRecipesSuccess = (recipes)=> ({
    type: Type.FETCH_RECIPES_SUCCESS,
    payload: recipes
})

export const fetchAllRecipesError = (error)=> ({
    type: Type.FETCH_RECIPES_SUCCESS,
    payload: error
})

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