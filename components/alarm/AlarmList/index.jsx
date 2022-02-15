import { useRouter } from "next/router";
import React from "react";

// import AnswerIcon from "../public/static/images/AnswerIcon";
// import AnswerSelectedIcon from "../public/static/images/AnswerSelectedIcon";
import BookMarkIcon from "../public/static/images/BookMarkIcon";
// import CommentIcon from "../public/static/images/CommentIcon";
// import HeartIcon from "../public/static/images/HeartIcon";
import {
  AlarmContentBox,
  AlarmIconBox,
  AlarmPostContent,
  AlarmPostTitle,
  AlarmTime,
  ListBox,
  ProfileImg,
} from "./style";

function AlarmList() {
  //안 읽었을 때 아이콘 #FFE59C, 읽었을 때 #E4E1D6
  //alarm get해서 isChecked state로 정의해서 관리하기
  //읽었을 경우 isChecked true설정하고, api로 post하기
  //알람 리스트 배열로 받아와서 map으로 돌리기.
  //시간 최신순으로 정렬해서 9개 보여주기
  //알람 종류에 따라 아이콘 다르게 보여주기
  const router = useRouter();

  const onClickMoveDetail = () => {
    // router.push(`/questions/${id}`);
    router.push("/questions/1");
  };

  return (
    <ListBox onClick={onClickMoveDetail}>
      <AlarmIconBox>
        {/* {isChecked ? (<AlarmIcon className="Yellow"/>):(<AlarmIcon className="Grey"/>)} */}
        <BookMarkIcon />
      </AlarmIconBox>
      <AlarmContentBox>
        <AlarmPostTitle>Next.js SSR관련 질문있습니다...도와주세요 아무나 제발요</AlarmPostTitle>
        <AlarmPostContent>
          음 Next.js는 우선 기본적으로 SSR과 SSG 둘다 지원하기 때문에 괜찮습니다
        </AlarmPostContent>
        <AlarmTime>2시간 전</AlarmTime>
      </AlarmContentBox>
      <AlarmIconBox>
        <ProfileImg
          src="/static/images/profile.jpg"
          alt="profileImage"
          quality={65}
          width={35}
          height={35}
          layout="fixed"
        />
      </AlarmIconBox>
    </ListBox>
  );
}

export default AlarmList;
