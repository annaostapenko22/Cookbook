import Type from "../recipeTypes";

const initialState = {
  recipesAll: [],
  recipe: {},
  loading: false,
  error: null
};

export const recipes = (state = initialState.recipesAll, action) => {
  switch (action.type) {
    case Type.FETCH_RECIPES_SUCCESS:
      return action.payload;
    case Type.FETCH_OLD_RECIPES_SUCCESS:
      return action.payload;
    case Type.RECIPE_DELETE_SUCCESS:
      return state.filter(recipe => recipe._id !== action.payload._id);
    default:
      return state;
  }
};

export const recipe = (state = initialState.recipe, action) => {
  switch (action.type) {
    case Type.RECIPE_ADD_SUCCESS:
      return action.payload;
    case Type.FETCH_ONE_RECIPE_SUCCESS:
      return action.payload;
    case Type.RECIPE_EDIT_SUCCESS:
      return { ...state, ...action.payload.recipe };
    case Type.OLD_RECIPE_ADD_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const loading = (state = initialState.loading, action) => {
  switch (action.type) {
    case Type.RECIPE_ADD_START:
    case Type.FETCH_OLD_RECIPES_START:
    case Type.FETCH_RECIPES_START:
    case Type.FETCH_ONE_RECIPE_START:
    case Type.RECIPE_EDIT_START:
    case Type.RECIPE_DELETE_START:
      return true;
    case Type.RECIPE_ADD_SUCCESS:
    case Type.FETCH_OLD_RECIPES_SUCCESS:
    case Type.FETCH_RECIPES_SUCCESS:
    case Type.FETCH_ONE_RECIPE_SUCCESS:
    case Type.RECIPE_EDIT_SUCCESS:
    case Type.RECIPE_DELETE_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const error = (state = initialState.error, action) => {
  switch (action.type) {
    case Type.RECIPE_ADD_START:
    case Type.FETCH_OLD_RECIPES_START:
    case Type.FETCH_RECIPES_START:
    case Type.FETCH_ONE_RECIPE_START:
    case Type.RECIPE_EDIT_START:
    case Type.RECIPE_DELETE_START:
      return null;
    case Type.RECIPE_ADD_ERROR:
    case Type.FETCH_OLD_RECIPES_ERROR:
    case Type.FETCH_RECIPES_ERROR:
    case Type.FETCH_ONE_RECIPE_ERROR:
    case Type.RECIPE_EDIT_ERROR:
    case Type.RECIPE_DELETE_ERROR:
      return action.payload.error;
    default:
      return state;
  }
};
