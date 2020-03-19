import { LOAD_PAGE_DATA, SET_LANGUAGE, SHOW_LOADER, HIDE_LOADER } from '../types';
import { DATA } from '../../data.js';

export const loadPageData = language => ({
  type: LOAD_PAGE_DATA,
  payload: DATA[language]
});

export const setLanguage = language => ({
  type: SET_LANGUAGE,
  payload: language
});

export const showLoader = () => ({
  type: SHOW_LOADER
});

export const hideLoader = () => ({
  type: HIDE_LOADER
});

export const getData = language => async dispatch => {
  await setTimeout(() => {
    dispatch(loadPageData(language));
    dispatch(hideLoader());
  }, Math.random() * 2000);
};