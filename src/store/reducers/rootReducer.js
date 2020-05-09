import { combineReducers } from 'redux';
import { pageReducer } from './pageReducer';
import { imageReducer } from './imageReducer';
import { contactReducer } from './contactReducer'

export default combineReducers({
  page: pageReducer,
  image: imageReducer,
  contact: contactReducer
});