import axios from "axios";
import React, { useCallback,useState } from "react";
import TextareaAutosize from "react-autosize-textarea";

import { API_URL } from "../../../config";
import { alertService } from "../../alert.service";
import CommentList from "../../comment/questionComment/CommentList";
import YellowButton from "../../common/YellowButton";
import * from './style';

function Comment({ updateCount, comments, id, token, setUpdateCount, setUpdateComment }) {
  const [text, setText] = useState("");
  const [newComment, setNewComment] = useState([]);

  const onChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text],
  );

  const onClickIsAuth = () => {
    if (!token) {
      alertService.warn("로그인 후 이용해주세요.");
    }
  };

  const CreateComment = async () => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .post(`${API_URL}/comments/question_comment_create/?question_id=${id}`, {
          text: text,,
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
      alertService.success("로그인 후 이용해주세요.");
    }
  };

  return (
    <FormContainer>
      <CommentContainer>
        <CommentInput
          placeholder="댓글을 입력하세요"
          value={text}
          onChange={onChange}
          onClick={onClickIsAuth}
        />
        <YellowButton
          paddingTop="0.6rem"
          paddingRight="1.5rem"
          onClick={CreateComment}
          type="button"
        >
          댓글 남기기
        </YellowButton>
      </CommentContainer>
      {/* {updateCount !== undefined ? (<><CommentCount>댓글 {updateCount}개</CommentCount></>) : (<><CommentCount>댓글 {commentNum}개</CommentCount></>)} */}
      <CommentCount>댓글 {updateCount}개</CommentCount>
      <CommentList
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

export default React.memo(Comment);
