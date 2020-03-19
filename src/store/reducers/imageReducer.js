import { OPEN_IMAGE_PANEL, CLOSE_IMAGE_PANEL } from "../types";

const initialState = {
  isOpened: false,
  image: null
};

const handlers = {
  [OPEN_IMAGE_PANEL]: (state, { payload }) => ({
    isOpened: true,
    image: payload
  }),
  [CLOSE_IMAGE_PANEL]: state => ({
    isOpened: false,
    image: null
  }),
  DEFAULT: state => state
};

export const imageReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;

  return handler(state, action);
};