import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { alertService } from "../../../alert.service";
import { API_URL } from "../../../config/index";
import { ProfileBox } from "../../../pages/accountSetting";
import { load_user } from "../../../redux/actions/auth";
import YellowButton from "../../common/YellowButton";
import { ProfileBioInput } from "./style";

function BioUpdateBox({ userData, token }) {
  const dispatch = useDispatch();
  const [bio, setBio] = useState("");
  const { id } = userData.user;

  //자기소개 입력, 변경하기
  const onChangeBio = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    } else {
      setBio(e.target.value);
    }
  };

  const onUpdateBio = async (e) => {
    e.preventDefault();

    await axios
      .patch(
        `${API_URL}/users/${id}/change_desc/`,
        {
          user_profile_content: bio,
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
        if (err.response.status === 400 || bio.length > 100) {
          alertService.warn("자기소개는 100자까지 작성가능합니다.");
        } else {
          alertService.warn("자기소개 변경 중 문제가 발생했습니다.");
        }
      });
  };

  return (
    <ProfileBox padding="2.125rem" onSubmit={(e) => onUpdateBio(e)}>
      <ProfileBioInput
        value={bio}
        onChange={(e) => onChangeBio(e)}
        placeholder="자기소개를 입력하세요."
      />
      <YellowButton type="submit" paddingRight="2.125rem" paddingTop="0.75rem">
        변경
      </YellowButton>
    </ProfileBox>
  );
}

export default BioUpdateBox;
