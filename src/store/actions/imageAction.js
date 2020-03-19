import { OPEN_IMAGE_PANEL, CLOSE_IMAGE_PANEL } from "../types";

export const openImage = image => ({
  type: OPEN_IMAGE_PANEL,
  payload: image
});

export const closeImage = () => ({
  type: CLOSE_IMAGE_PANEL,
});