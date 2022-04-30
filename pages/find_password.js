import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Alert } from "../components/Alert";
import { alertService } from "../components/alert.service";
import GreyInput from "../components/common/GreyInput";
import NavBar from "../components/common/NavBar";
import YellowButton from "../components/common/YellowButton";
import YellowTitle from "../components/common/YellowTitle";
import Layout from "../hocs/Layout";
import { reset_password } from "../redux/actions/auth";

function FindPassword() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
  });

  const onInput = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { email, username } = inputs;

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    dispatch(reset_password(email, username))
      .then((res) => {
        if (res?.status === 200) {
          alertService.warn("이메일이 전송되었습니다📧");
          setTimeout(() => {
            router.push("/password_reset_submit");
          }, 1500);
        } else {
          return res;
        }
      })
      .then((res) => {
        if (res === undefined || res === null) {
          console.log(res);
          throw new Error("아이디 혹은 이메일을 잘못입력했습니다.");
        }
      })
      .catch((err) => alertService.warn(err.message));
  };

  return (
    <>
      <Layout />
      <NavBar />
      <PWFormBox onSubmit={(e) => onSubmitEmail(e)}>
        <Alert />
        <PageTitle>비밀번호 찾기</PageTitle>
        <GuideMessage>
          가입하신 이메일을 입력하시면 해당 주소로 비밀번호 변경 링크를 보내드립니다.
        </GuideMessage>
        <InputRow>
          <YellowTitle fontSize="1.375rem">이메일</YellowTitle>
          <GreyInput
            name="email"
            width="28.75rem"
            height="3.125rem"
            marginRight="2.875rem"
            marginLeft="2.75rem"
            type="email"
            placeholder="이메일"
            onChange={(e) => onInput(e)}
            required
          />
        </InputRow>
        <InputRow>
          <YellowTitle fontSize="1.375rem">아이디</YellowTitle>
          <GreyInput
            name="username"
            width="28.75rem"
            height="3.125rem"
            marginRight="2.875rem"
            marginLeft="2.75rem"
            placeholder="아이디"
            onChange={(e) => onInput(e)}
            required
          />
          <YellowButton type="submit" paddingTop="0.9375rem" paddingRight="2.1875rem">
            전송
          </YellowButton>
        </InputRow>
      </PWFormBox>
    </>
  );
}

const PWFormBox = styled.form`
  width: 49.375rem;
  margin: auto auto;
  margin-top: 11.25rem;
`;

const PageTitle = styled.span`
  font-family: "Pretendard-Bold";
  font-size: 1.625rem;
  color: #343434;
  padding-bottom: 0.375rem;
  border-bottom: solid 3px #343434;
`;

const GuideMessage = styled.p`
  display: block;
  color: #8d8c85;
  font-size: 1.125rem;
  font-family: "Pretendard-Medium";
  border-top: solid 2px #e5e5e5;
  margin-top: 95px;
  padding-top: 20px;
  margin-bottom: 40px;
`;

const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2rem;
  align-items: center;
`;

export { GuideMessage, PageTitle, PWFormBox };
export default FindPassword;
