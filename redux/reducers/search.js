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
} from "../actions/types";

const initialState = {
  searchKeyword: "",
  loading: false,
  noResultContent: false,
  searchData: [],
  pageCount: 0,
};

const searchReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case ENTER_SEARCH_INPUT:
      return {
        ...state,
        searchKeyword: payload,
      };
    case RESET_SEARCH_INPUT:
      return {
        ...state,
        searchKeyword: "",
      };
    case SET_SEARCH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_SEARCH_LOADING:
      return {
        ...state,
        loading: false,
      };
    case NO_SEARCH_RESULT:
      return {
        ...state,
        noResultContent: true,
      };
    case RESET_NO_SEARCH_RESULT:
      return {
        ...state,
        noResultContent: false,
      };
    case SET_SEARCH_DATA:
      return {
        ...state,
        noResultContent: false,
        searchData: payload,
      };
    case RESET_SEARCH_DATA:
      return {
        ...state,
        searchData: [],
      };
    case SET_SEARCH_PAGE:
      return {
        ...state,
        pageCount: payload,
      };
    case RESET_SEARCH_PAGE:
      return {
        ...state,
        pageCount: 0,
      };
    default:
      return state;
  }
};

export default searchReducer;
