import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { API_URL } from "../../../config/index";
import { ProfileBioBox } from "../../../pages/account_setting";
import { load_user } from "../../../redux/actions/auth";
import { alertService } from "../../alert.service";
import YellowButton from "../../common/YellowButton";
import { EditButton, ImageBox, ProfileBio, ProfileImgWrapper } from "./style";

function ProfileInfoBox({ userData, token }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { id, user_profile_image, user_profile_content } = userData.user;

  useEffect(() => {
    if (!userData) {
      alertService.warn("로그인 후 이용해주세요");
      router.push("/login_page");
    }
  }, [router, userData]);
  const profileImgInput = useRef();
  const [updatedImg, setUpdatedImg] = useState(user_profile_image); //업로드 파일 이미지url
  const [imgBase64, setImgBase64] = useState(
    `https://api-diggging.shop${user_profile_image.toString()}`,
  ); // 파일 base64 : 미리보기용
  const [imgFile, setImgFile] = useState(user_profile_image); //파일 : axios 보내줄 것

  const onClickUploadFile = () => {
    profileImgInput.current.click();
  };

  const handleChangeFile = async (e) => {
    let reader = new FileReader();

    reader.onloadend = async () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;

      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };

    if (e.target.files[0]) {
      //파일선택했다면
      reader.readAsDataURL(e.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(e.target.files[0]); // 파일 상태 업데이트
    }

    const imgToAddedUrl = URL.createObjectURL(e.target.files[0]);

    setUpdatedImg(imgToAddedUrl);
  };

  const updateProfileImg = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("user_profile_image", imgFile);
    try {
      await axios
        .patch(`${API_URL}/users/${id}/change_img/`, formData, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            alertService.warn("성공적으로 변경되었습니다.");
            dispatch(load_user());
          }
        });
    } catch (err) {
      if (err.response.status === 400) {
        alertService.warn("파일을 다시 확인해주세요");
      } else if (err.response.status === 500) {
        alertService.warn("서버에 문제가 발생했습니다");
      } else {
        alertService.warn(err);
      }
    }
  };

  return (
    <ProfileBioBox padding="1.875rem" onSubmit={(e) => updateProfileImg(e)}>
      <ImageBox>
        <ProfileImgWrapper>
          <Image src={imgBase64} alt="profileImage" quality={100} layout="fill" objectFit="cover" />
          <EditButton onClick={onClickUploadFile} />
        </ProfileImgWrapper>
        <YellowButton
          paddingTop="0.625rem"
          paddingRight="1.8rem"
          marginRight="0.5rem"
          fontSize="0.8125rem"
          type="submit"
        >
          변경
        </YellowButton>
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          multiple
          ref={profileImgInput}
          style={{ display: "none" }}
          onChange={(e) => handleChangeFile(e)}
        />
      </ImageBox>
      {user_profile_content ? (
        <ProfileBio>{user_profile_content}</ProfileBio>
      ) : (
        <ProfileBio>아직 자기소개가 없습니다.</ProfileBio>
      )}
    </ProfileBioBox>
  );
}

export default ProfileInfoBox;
