import axios from "axios";
import React, { useCallback, useState } from "react";

import { API_URL } from "../../../../config";
import { alertService } from "../../../alert.service";
import YellowButton from "../../../common/YellowButton";
import AnswerCommentList from "../AnswerCommentList/index";
import {
  CommentContainer,
  CommentCount,
  CommentInput,
  CommentSendBtn,
  FormContainer,
} from "./style";

function AnswerComment({ updateCount, comments, id, token, setUpdateCount, setUpdateComment }) {
  const [text, setText] = useState("");
  const [newComment, setNewComment] = useState([]);

  const onChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text],
  );

  const CreateAnswerComment = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .post(`${API_URL}/comments/answer_comment_create/?answer_id=${id}`, {
          text,
        })
        .then((response) => {
          setNewComment(response.data);
          setUpdateComment([...comments, response.data]);
          setText("");
          setUpdateCount(updateCount + 1);
        })
        .catch((e) => {
          if (e.response.status === 400) {
            alertService.warn("댓글을 작성해주세요");
          } else if (e.response.status === 401) {
            alertService.success("로그인 후 이용해주세요.");
          }
        });
    } catch (e) {
      alertService.warn("로그인 후 이용해주세요.");
    }
  };

  const onClickIsAuth = () => {
    if (!token) {
      alertService.warn("로그인 후 이용해주세요.");
    }
  };

  return (
    <FormContainer>
      <CommentContainer>
        <CommentInput
          onClick={onClickIsAuth}
          placeholder="댓글을 입력하세요"
          value={text}
          onChange={onChange}
        />
        <YellowButton
          fontSize="0.8125rem"
          paddingTop="0.6rem"
          paddingRight="1.5rem"
          onClick={CreateAnswerComment}
          type="button"
        >
          댓글 남기기
        </YellowButton>
      </CommentContainer>
      <CommentCount>댓글 {updateCount}개</CommentCount>
      <AnswerCommentList
        id={id}
        comments={comments}
        newComment={newComment}
        setUpdateCount={setUpdateCount}
        setUpdateComment={setUpdateComment}
        updateCount={updateCount}
      />
    </FormContainer>
  );
}

export default React.memo(AnswerComment);
