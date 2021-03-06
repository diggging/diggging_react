import React from "react";

import AnswersList from "../AnswersList/index";

function Answers({ questionId, answers, user, token, questionUserId, AnswerisSelected }) {
  return (
    <>
      {answers &&
        answers.map((answer) => (
          <AnswersList
            key={answer.id}
            questionId={questionId}
            user={user}
            token={token}
            answer={answer}
            questionUserId={questionUserId}
            AnswerisSelected={AnswerisSelected}
          />
        ))}
    </>
  );
}

export default Answers;
