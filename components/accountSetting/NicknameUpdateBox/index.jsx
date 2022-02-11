import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { API_URL } from "../../../config";
import { ProfileBox } from "../../../pages/accountSetting";
import { load_user } from "../../../redux/actions/auth";
import { alertService } from "../../alert.service";
import FlexColumn from "../../common/FlexColumn";
import GreyInput from "../../common/GreyInput";
import YellowButton from "../../common/YellowButton";
import YellowTitle from "../../common/YellowTitle";
import { ErrorMessage } from "./style";

function NicknameUpdateBox({ userData, token }) {
  const dispatch = useDispatch();
  const [nickname, setNickname] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { id } = userData.user;

  //닉네임 input관리
  const onChangeNickname = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    } else {
      setNickname(e.target.value);
      if (e.target.value.length > 7) {
        setErrorMessage("닉네임은 7자까지 가능합니다.");
      }
    }
  };

  //닉네임 변경하기 api연결
  const onUpdateNickname = async (e) => {
    e.preventDefault();
    await axios
      .patch(
        `${API_URL}/users/${id}/change_nickname/`,
        {
          user_nickname: nickname,
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
          dispatch(load_user());
          alertService.warn("성공적으로 변경되었습니다.");
        }
      })
      .catch((err) => {
        if (err.response.status == 400 || nickname.length > 7) {
          alertService.warn("닉네임 길이는 7자 이하만 가능합니다");
        } else {
          alertService.warn(err);
        }
      });
  };

  return (
    <ProfileBox padding="2.625rem" onSubmit={(e) => onUpdateNickname(e)}>
      <YellowTitle>닉네임 설정</YellowTitle>
      <FlexColumn>
        <GreyInput
          placeholder="변경할 닉네임"
          value={nickname}
          onChange={(e) => onChangeNickname(e)}
          width="25rem"
          height="3.125rem"
        />
        <ErrorMessage>{errorMessage}</ErrorMessage>
      </FlexColumn>
      <YellowButton type="submit" paddingRight="2.125rem" paddingTop="0.75rem">
        변경
      </YellowButton>
    </ProfileBox>
  );
}

export default NicknameUpdateBox;
