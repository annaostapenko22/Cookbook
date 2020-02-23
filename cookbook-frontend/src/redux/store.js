import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { recipe, loading, error, recipes } from "./reducers/recipe";
import ReduxThunk from "redux-thunk";

const rootReducer = combineReducers({
  recipes,
  recipe,
  loading,
  error
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

export default store;
