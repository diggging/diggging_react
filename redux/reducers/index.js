import { combineReducers } from "redux";

import saveContent from "../../modules/editor";
import getQuestion from "../../modules/questions";
import setPage from "../../modules/questions";
import setData from "../../modules/questions";
import setQuestion from "../../modules/questions";
import setMine from "../../modules/questions";
import clearBigCriteria from "../../modules/questions";
import clearQuestion from "../../modules/questions";
import setMinePage from "../../modules/questions";
import authReducer from "./auth";
import searchReducer from "./search";

export default combineReducers({
  auth: authReducer,
  content: saveContent,
  questions: getQuestion,
  setPage,
  setMinePage,
  setQuestion,
  setMine,
  clearBigCriteria,
  search: searchReducer,
});
