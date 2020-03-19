import { LOAD_PAGE_DATA, SET_LANGUAGE, SHOW_LOADER, HIDE_LOADER } from '../types';

const initialState = {
  isLoaded: false,
  activeLanguage: 'english',
  pageData: {}
};

const handlers = {
  [LOAD_PAGE_DATA]: (state, { payload }) => ({
    ...state,
    pageData: payload
  }),
  [SET_LANGUAGE]: (state, { payload }) => ({
    ...state,
    activeLanguage: payload
  }),
  [SHOW_LOADER]: state => ({
    ...state,
    isLoaded: false
  }),
  [HIDE_LOADER]: state => ({
    ...state,
    isLoaded: true
  }),
  DEFAULT: state => state
};

export const pageReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};