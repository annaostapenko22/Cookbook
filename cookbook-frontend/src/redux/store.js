import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { recipe, loadingReducer, errorReducer, recipes } from "./recipeReducers";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  recipes: recipes,
  recipe: recipe,
  loadingReducer: loadingReducer,
  errorReducer: errorReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
