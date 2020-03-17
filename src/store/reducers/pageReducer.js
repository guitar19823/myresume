import { LOAD_PAGE_DATA } from '../types';

const initialState = {
  isLoaded: false,
  pageData: {}
};

const handlers = {
  [LOAD_PAGE_DATA]: (state, {payload}) => ({
    ...state,
    isLoaded: payload.isLoaded,
    pageData: payload.DATA
  }),
  DEFAULT: state => state
};

export const pageReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};