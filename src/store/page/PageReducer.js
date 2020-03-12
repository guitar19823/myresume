import { SET_REDIRECT } from '../types';

const handlers = {
  [SET_REDIRECT]: (state, { payload }) => ({
    ...state,
    redirect: payload
  }),
  DEFAULT: state => state
};

export const PageReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};