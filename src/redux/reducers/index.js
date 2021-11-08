import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import shopping from "./shopping";

const RootReducer = combineReducers({
  counter: counterReducer,
  shopping: shopping,
});

export default RootReducer;
