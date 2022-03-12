import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { API_URL } from "../../../config";
import { load_user } from "../../../redux/actions/auth";
import { alertService } from "../../alert.service";
import FlexColumn from "../../common/FlexColumn";
import FlexRow from "../../common/FlexRow";
import GreyInput from "../../common/GreyInput";
import YellowButton from "../../common/YellowButton";
import YellowTitle from "../../common/YellowTitle";
import { ErrorMsg, PasswordInputBox, PasswordMessage, PasswordResetBox, RowBox } from "./style";

function PasswordSetBox({ userData, token }) {
  const { id } = userData.user;
  const dispatch = useDispatch();
  const [pwInput, setPwInput] = useState({
    oldPW: "",
    newPW1: "",
    newPW2: "",
  });
  const { oldPW, newPW1, newPW2 } = pwInput;

  const [errorMessage, setErrorMessage] = useState({
    pw1Error: "",
    pw2Error: "",
  });
  const { pw1Error, pw2Error } = errorMessage;
  const onChangePW = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    const { value, name } = e.target;

    setPwInput({
      ...pwInput,
      [name]: value,
    });
    switch (e.target.name) {
      case "newPW1":
        if (e.target.value.length < 8) {
          setErrorMessage({
            ...errorMessage,
            pw1Error: "8자 이상 입력해주세요",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            pw1Error: "",
          });
        }
        break;
      case "newPW2":
        if (e.target.value == newPW1) {
          setErrorMessage({
            ...errorMessage,
            pw2Error: " ",
          });
        } else {
          setErrorMessage({
            ...errorMessage,
            pw2Error: "비밀번호가 일치하지 않습니다",
          });
        }
        break;
    }
  };
  const onUpdatePassword = async (e) => {
    e.preventDefault();
    await axios
      .patch(
        `${API_URL}/users/${id}/change_pw/`,
        {
          old_password: oldPW,
          password: newPW1,
          password2: newPW2,
        },
        {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        if (res.status === 200) {
          alertService.warn("성공적으로 변경되었습니다.");
          dispatch(load_user());
        }
      })
      .catch((err) => {
        if (err.response.status === 400) {
          if (newPW1 !== newPW2) {
            alertService.warn("두 비밀번호가 일치하지 않습니다.");
          } else {
            alertService.warn("이전 비밀번호를 확인해주세요");
          }
        } else {
          alertService.warn(err);
        }
      });
  };

  return (
    <PasswordResetBox onSubmit={(e) => onUpdatePassword(e)}>
      <YellowTitle marginBottom="0.75rem">비밀번호 변경</YellowTitle>
      <PasswordMessage>새 비밀번호를 입력하시면 비밀번호가 변경됩니다.</PasswordMessage>
      <PasswordInputBox>
        <RowBox>
          <FlexRow>
            <GreyInput
              type="password"
              required
              name="oldPW"
              value={oldPW}
              onChange={onChangePW}
              placeholder="이전 비밀번호"
              width="10rem"
              height="3.125rem"
              marginRight="0.75rem"
            />
            <FlexColumn>
              <GreyInput
                type="password"
                required
                name="newPW1"
                value={newPW1}
                onChange={onChangePW}
                placeholder="새 비밀번호"
                width="10rem"
                height="3.125rem"
                marginRight="0.75rem"
              />
              <ErrorMsg>{pw1Error}</ErrorMsg>
            </FlexColumn>
            <FlexColumn>
              <GreyInput
                type="password"
                required
                name="newPW2"
                value={newPW2}
                onChange={onChangePW}
                placeholder="비밀번호 확인"
                width="10rem"
                height="3.125rem"
                marginRight="3.75rem"
              ></GreyInput>
              <ErrorMsg>{pw2Error}</ErrorMsg>
            </FlexColumn>
          </FlexRow>
          <YellowButton type="submit" paddingRight="2.125rem" paddingTop="0.75rem">
            변경
          </YellowButton>
        </RowBox>
      </PasswordInputBox>
    </PasswordResetBox>
  );
}
export default PasswordSetBox;
