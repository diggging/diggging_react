import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import { API_URL } from "../../../config";
import NotSelectedAnswer from "../../../public/static/images/NotSelectedAnswer";
import SelectedAnswer from "../../../public/static/images/SelectedAnswer";
import { alertService } from "../../alert.service";
import AnswerComment from "../../comment/answerComment/AnswerComment";
import WhiteButton from "../../common/WhiteButton";
import {
  AnswerBtn,
  Btn,
  BtnContainer,
  Container,
  Data,
  DescContainer,
  FlexContainer,
  HeadContainer,
  MainContainer,
  ProfileContainer,
  ProfileContent,
  ProfileImg,
  ProfileInfoContainer,
  ProfileLevel,
  ProfileName,
  SecondContainer,
  Selection,
  SelectionText,
  Title,
} from "../AnswersList/style";
import Selected from "../Selected/index";

function AnswersList({ answer, user, token, questionId, questionUserId, AnswerisSelected }) {
  const ref = useRef();
  const [answerToken, setAnswerToken] = useState(token);
  const [isSelected, setIsSelected] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [commentIsOpen, setCommentIsOpen] = useState(true);
  const [loaderHeight, setLoaderHeight] = useState(null);

  const [updateCount, setUpdateCount] = useState(null);
  const [updateComment, setUpdateComment] = useState(answer.answer_comments);

  const router = useRouter();

  const { created } = answer;
  const createdAtDate = new Date(created);
  const createdYear = createdAtDate.getFullYear();
  const createdMonth = createdAtDate.getMonth() + 1;
  const createdDate = createdAtDate.getDate();
  const createdHour = createdAtDate.getHours();
  const createdMinutes = createdAtDate.getMinutes();

  const handleCommentOpen = () => {
    setCommentIsOpen(!commentIsOpen);
  };

  const deleteAnswer = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios.delete(`${API_URL}/questions/${id}/answer_delete/`).then((response) => {
        alertService.success("????????? ?????? ???????????????.");
        setTimeout(() => {
          router.reload(`/questions/${questionId}`);
        }, 1000);
      });
    } catch (e) {
      alertService.warn("????????? ???????????? ???????????????");
    }
  };

  const onOpen = () => {
    setIsOpen(!isOpen);
  };

  const Viewer = dynamic(() => import("../AnswerView/index"), {
    ssr: false,
    loading: () => <Loader type="Oval" color="#FFE59C" width={100} height={loaderHeight} />,
  });

  useEffect(() => {
    setLoaderHeight(ref.current.clientHeight);
  }, []);

  useEffect(() => {
    setUpdateCount(answer.answer_comment_count);
  }, [answer]);

  return (
    <>
      <MainContainer>
        <Container>
          <HeadContainer>
            <Title>{answer.title}</Title>
            {!answer.selection ? (
              <>
                <Selection>
                  <NotSelectedAnswer />
                </Selection>
              </>
            ) : (
              <>
                <Selection>
                  <SelectionText>?????? ??????</SelectionText>
                  <SelectedAnswer />
                </Selection>
              </>
            )}
          </HeadContainer>

          <SecondContainer>
            <Data>
              {createdYear}??? {createdMonth}??? {createdDate}??? {createdHour}??? {createdMinutes}???
            </Data>
            {answer.user?.id === user?.user?.id ? (
              <>
                <BtnContainer>
                  <Link href={`/answer/update/${answer.id}`} passHref>
                    <Btn>????????????</Btn>
                  </Link>
                  <Btn onClick={() => deleteAnswer(answer.id)}>????????????</Btn>
                </BtnContainer>
              </>
            ) : (
              <></>
            )}
          </SecondContainer>

          <DescContainer ref={ref}>
            <Viewer desc={answer.desc} />
          </DescContainer>

          <FlexContainer>
            {questionUserId === user?.user?.id && AnswerisSelected === false ? (
              <>
                {isOpen === true && answer.selection === false ? (
                  <>
                    <Selected
                      isOpen={isOpen}
                      setIsOpen={setIsOpen}
                      id={answer.id}
                      token={token}
                      questionId={answer.question}
                    />
                  </>
                ) : null}
                <WhiteButton
                  paddingTop="0.625rem"
                  paddingRight="1.125rem"
                  onClick={() => onOpen()}
                  marginRight="1rem"
                >
                  ????????????
                </WhiteButton>
                <WhiteButton
                  paddingTop="0.625rem"
                  paddingRight="1.125rem"
                  onClick={() => handleCommentOpen()}
                >
                  {commentIsOpen === true ? <>?????? ??????</> : <>?????? {updateCount}</>}
                </WhiteButton>
              </>
            ) : (
              <>
                <WhiteButton
                  paddingTop="10px"
                  paddingRight="18px"
                  fontSize="13px"
                  onClick={() => handleCommentOpen()}
                >
                  {commentIsOpen === true ? <>?????? ??????</> : <>?????? {updateCount}</>}
                </WhiteButton>
              </>
            )}
          </FlexContainer>

          <ProfileContainer>
            <ProfileImg>
              <Image
                src={`https://api-diggging.shop${answer.user.user_profile_image}`}
                width={50}
                height={50}
                alt="profileImage"
                quality={100}
                // layout="fill"
                objectFit="cover"
              />
            </ProfileImg>
            <ProfileInfoContainer>
              {answer?.user?.user_nickname ? (
                <>
                  <ProfileName>{answer.user.user_nickname}</ProfileName>
                  <ProfileLevel>LV.{answer.user.user_level}</ProfileLevel>
                </>
              ) : null}
            </ProfileInfoContainer>
            {answer?.user?.user_profile_content ? (
              <>
                <ProfileContent>{answer.user.user_profile_content.slice(0, 250)}</ProfileContent>
              </>
            ) : null}
          </ProfileContainer>
          {commentIsOpen === true ? (
            <>
              <AnswerComment
                updateCount={updateCount}
                setUpdateCount={setUpdateCount}
                comments={updateComment}
                setUpdateComment={setUpdateComment}
                id={answer.id}
                token={token}
              />
            </>
          ) : null}
        </Container>
      </MainContainer>
    </>
  );
}

export default React.memo(AnswersList);
