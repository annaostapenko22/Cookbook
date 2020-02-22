import Type from "./recipeTypes";

const initialState = {
  recipesAll: [],
  recipe: {},
  loading: false,
  error: null
};

export const recipes = (state= initialState.recipesAll, action)=> {
switch (action.type) {
  case Type.FETCH_RECIPES_SUCCESS:
    return action.payload;
  default:
    return state;
}
}

export const recipe = (state = initialState.recipe, action) => {
  switch (action.type) {
    case Type.RECIPE_ADD_SUCCESS:
      return action.payload;
    case Type.FETCH_ONE_RECIPE_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export const loadingReducer = (state = initialState.loading, action) => {
  switch (action.type) {
    case Type.RECIPE_ADD_START:
      return true;
    case Type.RECIPE_ADD_SUCCESS:
      return false;
    default:
      return state;
  }
};

export const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case Type.RECIPE_ADD_START:
      return null;
    case Type.RECIPE_ADD_ERROR:
      return action.payload.error;
    default:
      return state;
  }
};
