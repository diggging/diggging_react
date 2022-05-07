import {
  ENTER_SEARCH_INPUT,
  NO_SEARCH_RESULT,
  REMOVE_SEARCH_LOADING,
  RESET_NO_SEARCH_RESULT,
  RESET_SEARCH_INPUT,
  SET_SEARCH_LOADING,
} from "../actions/types";

const initialState = {
  searchKeyword: "",
  loading: false,
  noResultContent: false,
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
    default:
      return state;
  }
};

export default searchReducer;