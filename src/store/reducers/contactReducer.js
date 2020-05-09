import { SEND_MESSAGE } from "../types";

const initialState = {

};

const handlers = {
  [SEND_MESSAGE]: (state) => ({
    ...state
  }),
  DEFAULT: state => state
};

export const contactReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};