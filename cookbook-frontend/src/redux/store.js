import { createStore, combineReducers } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import { recipe, loadingReducer, errorReducer } from "./recipeReducers";

const rootReducer = combineReducers({
  recipe: recipe,
  loadingReducer: loadingReducer,
  errorReducer: errorReducer
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
