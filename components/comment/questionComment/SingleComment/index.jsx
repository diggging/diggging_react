import axios from "axios";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "../../../../config";
import { check_auth_status } from "../../../../redux/actions/auth";
import { alertService } from "../../../alert.service";
import YellowButton from "../../../common/YellowButton";
import {
  Btn,
  BtnContainer,
  CommentContainer,
  CommentDate,
  CommentInput,
  CommentSendBtn,
  CommentText,
  CommentUpdateContainer,
  Container,
  FlexContainer,
  NameDateContainer,
  UserImg,
  UserInfoContainer,
  UserNickName,
} from "./style";
function SingleComment({
  data,
  comment,
  comments,
  setComment,
  setUpdateCount,
  updateCount,
  setUpdateComment,
}) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const [token, setToken] = useState("");

  const [isUpdated, setIsUpdated] = useState(false);
  const [updateData, setUpdateData] = useState(data.text);
  const [text, setText] = useState("");

  const { created } = data;
  const createdAtDate = new Date(created);
  const createdYear = createdAtDate.getFullYear();
  const createdMonth = createdAtDate.getMonth() + 1;
  const createdDate = createdAtDate.getDate();
  const createdHour = createdAtDate.getHours();
  const createdMinutes = createdAtDate.getMinutes();

  const onChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text],
  );

  const onClickUpdate = () => {
    setIsUpdated(true);
    setText(updateData);
  };

  const deleteComment = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios.delete(`${API_URL}/comments/${id}/comment_delete/`).then((response) => {
        alertService.success("댓글이 삭제되었습니다.");
        setComment(comment.filter((comment) => comment.id !== data.id));
        setUpdateComment(comments.filter((comments) => comments.id !== data.id));
        setUpdateCount(updateCount - 1);
      });
    } catch (e) {
      alertService.warn("댓글이 삭제되지 않았습니다.");
    }
  };

  const upDataComment = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .patch(`${API_URL}/comments/${id}/question_comment_update/`, {
          text,
        })
        .then((response) => {
          setIsUpdated(false);

          comment.map((item) => {
            if (item.id === data.id) {
              setUpdateData(text);
            }
          });
        });
    } catch (e) {
      console.log(e);
    }
  };

  const getAccessToken = async () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(check_auth_status())
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.access;

          setToken(accessToken);
        })
        .catch((err) => console.log(err));
    }
  };

  //token 확인(refresh, verify)
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) dispatch(check_auth_status());
    getAccessToken();
  }, [dispatch]);

  return (
    <>
      <ul>
        {data.user ? (
          <>
            <CommentContainer>
              <Container>
                {isUpdated ? (
                  <>
                    <CommentUpdateContainer>
                      <CommentInput name="text" value={text} onChange={onChange} />
                      <YellowButton
                        paddingTop="0.5rem"
                        paddingRight="1.5rem"
                        type="button"
                        onClick={() => upDataComment(data.id)}
                      >
                        댓글 남기기
                      </YellowButton>
                    </CommentUpdateContainer>
                  </>
                ) : (
                  <>
                    <UserImg>
                      <Image
                        src={`${data.user.user_profile_image}`}
                        width={50}
                        height={50}
                        alt="profileImage"
                        quality={100}
                        // layout="fill"
                        objectFit="cover"
                      />
                    </UserImg>
                    <UserInfoContainer>
                      <NameDateContainer>
                        <FlexContainer>
                          <UserNickName>{data.user.user_nickname}</UserNickName>
                          <CommentDate>
                            {createdYear}년 {createdMonth}월 {createdDate}일 {createdHour}시{" "}
                            {createdMinutes}분
                          </CommentDate>
                        </FlexContainer>

                        {data.user?.id === user?.user?.id ? (
                          <>
                            <FlexContainer>
                              <BtnContainer>
                                <Btn onClick={() => onClickUpdate()}>수정하기</Btn>
                                <Btn onClick={() => deleteComment(data.id)}>삭제하기</Btn>
                              </BtnContainer>
                            </FlexContainer>
                          </>
                        ) : null}
                      </NameDateContainer>

                      <CommentText>{updateData}</CommentText>
                    </UserInfoContainer>
                  </>
                )}
              </Container>
            </CommentContainer>
          </>
        ) : null}
      </ul>
    </>
  );
}

export default React.memo(SingleComment);
