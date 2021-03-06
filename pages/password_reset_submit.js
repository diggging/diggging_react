import { useRouter } from "next/router";
import { darken, lighten } from "polished";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { Alert } from "../components/Alert";
import { alertService } from "../components/alert.service";
import FlexColumn from "../components/common/FlexColumn";
import GreyInput from "../components/common/GreyInput";
import NavBar from "../components/common/NavBar";
import YellowTitle from "../components/common/YellowTitle";
import Layout from "../hocs/Layout";
import { reset_password_confirm } from "../redux/actions/auth";
import { GuideMessage, PageTitle, PWFormBox } from "./find_password";

function ResetPassword() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [inputs, setInputs] = useState({
    new_password: "",
    password_confirm: "",
    username: "",
    temp: "",
  });

  const onInput = (e) => {
    const { name, value } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { new_password, password_confirm, username, temp } = inputs;

  const onUpdatePassword = (e) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(reset_password_confirm(username, temp, new_password, password_confirm))
        .then((res) => {
          if (res.status === 200) {
            alertService.warn("비밀번호가 성공적으로 변경되었습니다🔑.");
            setTimeout(() => {
              router.push("/login_page");
            }, 1500);
          } else if (res.status === 400) {
            if (new_password !== password_confirm) {
              alertService.warn("비밀번호가 일치하지 않습니다");
            } else {
              alertService.warn("아이디 또는 인증번호를 다시 확인해주세요");
            }
          }
        })
        .catch((err) => alertService.warn(err));
    }
  };

  return (
    <>
      <Layout />
      <NavBar />
      <Alert />
      <PWFormBox onSubmit={(e) => onUpdatePassword(e)}>
        <PageTitle>비밀번호 변경하기 </PageTitle>
        <GuideMessage>새 비밀번호를 입력하시면 비밀번호가 변경됩니다.</GuideMessage>
        <FlexColumn>
          <StyledFlexRow>
            <YellowTitle fontSize="1.375rem">아이디</YellowTitle>
            <GreyInput
              width="21.5625rem"
              height="3.125rem"
              marginRight="2.875rem"
              marginLeft="2.75rem"
              name="username"
              placeholder="아이디"
              value={username}
              onChange={(e) => onInput(e)}
              required
            />
          </StyledFlexRow>
          <StyledFlexRow>
            <YellowTitle fontSize="1.375rem">인증번호</YellowTitle>
            <GreyInput
              width="21.5625rem"
              height="3.125rem"
              marginRight="2.875rem"
              marginLeft="2.75rem"
              name="temp"
              placeholder="인증번호 5자를 입력하세요"
              password={temp}
              onChange={(e) => onInput(e)}
              required
            />
          </StyledFlexRow>
          <StyledFlexRow>
            <YellowTitle fontSize="1.375rem">비밀번호</YellowTitle>
            <GreyInput
              width="21.5625rem"
              height="3.125rem"
              marginRight="2.875rem"
              marginLeft="2.75rem"
              type="password"
              name="new_password"
              placeholder="새 비밀번호"
              value={new_password}
              onChange={(e) => onInput(e)}
              required
            />
          </StyledFlexRow>
          <StyledFlexRow>
            <YellowTitle fontSize="1.375rem">비밀번호 확인</YellowTitle>
            <GreyInput
              width="21.5625rem"
              height="3.125rem"
              marginRight="2.875rem"
              marginLeft="2.75rem"
              type="password"
              name="password_confirm"
              placeholder="비밀번호 확인"
              value={password_confirm}
              onChange={(e) => onInput(e)}
              required
            />
          </StyledFlexRow>
        </FlexColumn>
        <SubmitButton type="submit">전송</SubmitButton>
      </PWFormBox>
    </>
  );
}

const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 1.5rem;
  align-items: center;
`;
const SubmitButton = styled.button`
  margin-top: 1.5rem;
  margin-left: 82%;
  padding: 0.9375rem 2.1875rem;
  border-radius: 1.5625rem;

  background-color: #FFD358;
  color: #343434;
  font-family: 'Pretendard-SemiBold';
  font-size: 1rem;

  box-shadow: 0.2rem 0.2rem 0.5rem 0.2rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background-color: ${lighten(0.02, "#FFD358")};
    box-shadow: 0.2rem 0.2rem 0.5rem 0.2rem rgba(0, 0, 0, 0.15);
  }
  &:active {
    background-color: ${darken(0.02, "#FFD358")};
`;

export default ResetPassword;
