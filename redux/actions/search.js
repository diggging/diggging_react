import {
  ENTER_SEARCH_INPUT,
  NO_SEARCH_RESULT,
  REMOVE_SEARCH_LOADING,
  RESET_NO_SEARCH_RESULT,
  RESET_SEARCH_DATA,
  RESET_SEARCH_INPUT,
  RESET_SEARCH_PAGE,
  SET_SEARCH_DATA,
  SET_SEARCH_LOADING,
  SET_SEARCH_PAGE,
} from "./types";

export const setSearchLoading = () => (dispatch) => {
  dispatch({
    type: SET_SEARCH_LOADING,
  });
};

export const removeSearchLoading = () => (dispatch) => {
  dispatch({
    type: REMOVE_SEARCH_LOADING,
  });
};

export const setNoSearchResult = () => (dispatch) => {
  dispatch({
    type: NO_SEARCH_RESULT,
  });
};

export const resetNoSearchResult = () => (dispatch) => {
  dispatch({
    type: RESET_NO_SEARCH_RESULT,
  });
};

export const dispatchSearchData = (payload) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_DATA,
    payload,
  });
};

export const resetSearchData = () => (dispatch) => {
  dispatch({
    type: RESET_SEARCH_DATA,
  });
};

export const enterSearchInput = (payload) => (dispatch) => {
  dispatch({
    type: ENTER_SEARCH_INPUT,
    payload,
  });
};

export const resetSearchInput = () => (dispatch) => {
  dispatch({
    type: RESET_SEARCH_INPUT,
  });
};

export const setSearchPage = (payload) => (dispatch) => {
  dispatch({
    type: SET_SEARCH_PAGE,
    payload,
  });
};

export const resetSearchPage = () => (dispatch) => {
  dispatch({
    type: RESET_SEARCH_PAGE,
  });
};
