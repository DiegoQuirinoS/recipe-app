import { combineReducers, createStore } from "redux";
import recipeReducer from "./recipeReducer";

const rootReducer = combineReducers({
  recipeState: recipeReducer,
});

const store = createStore(rootReducer);

export default store;
