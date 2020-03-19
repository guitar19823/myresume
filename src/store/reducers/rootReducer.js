import { combineReducers } from "redux";
import { pageReducer } from "./pageReducer";
import { imageReducer } from "./imageReducer";

export default combineReducers({
  page: pageReducer,
  image: imageReducer
});