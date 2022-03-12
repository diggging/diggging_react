import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Prevent from "../components/questions/PreventRerender";
import QuestionList from "../components/questions/QuestionList";
import { clearBigCriteria, setPage, setQuestion } from "../modules/questions";

function Recent() {
  const dispatch = useDispatch();
  const { data, count, page, bigCriteria, smallCriteria, loading, error } = useSelector(
    (state) => state.questions,
  );

  useEffect(() => {
    dispatch(setQuestion(1, "recent", "all"));
  }, [dispatch]);

  return (
    <Prevent>
      <QuestionList data={data} page={page} count={count}></QuestionList>
    </Prevent>
  );
}

export default React.memo(Recent);
