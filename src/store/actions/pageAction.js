import { LOAD_PAGE_DATA } from "../types";
import { DATA } from '../../data.js';

export const loadPageData = () => {
  return {
    type: LOAD_PAGE_DATA,
    payload: {
      isLoaded: true,
      DATA
    }
  }
};