// import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";

// import { useDispatch, useSelector } from "react-redux";
// // import BookmarkIcon from "../../public/static/images/BookMarkIcon.js";
// // import HeartIcon from "../../public/static/images/HeartIcon.js";
// import { alertService } from "../../alert.service";
import { Alert } from "../../Alert";
import FlexColumn from "../../common/FlexColumn";
import {
  CardBox,
  CardFooter,
  CardHead,
  ContentWrapper,
  HashTag,
  HeartBtn,
  Hit,
  NumberData,
  PostContent,
  PostDateInfo,
  PostTitle,
  ProfileBox,
  ProfileImg,
  TagWrapper,
  Username,
} from "./style";

function ListCard({ data }) {
  const {
    created,
    // id,
    // answer_exist,
    desc,
    helped_num,
    hits,
    // scrap_num,
    title,
    question_tags,
  } = data;
  const { user_nickname, user_profile_image } = data.user;

  const createdAtDate = new Date(created);
  const createdYear = createdAtDate.getFullYear();
  const createdMonth = createdAtDate.getMonth() + 1;
  const createdDate = createdAtDate.getDate();
  const createdHour = createdAtDate.getHours();
  const createdMinutes = createdAtDate.getMinutes();

  // const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // const [Like, setLike] = useState(helped_num);
  // const [token, setToken] = useState("");

  // const router = useRouter();
  // const dispatch = useDispatch();

  return (
    <Link href={`/questions/${data.id}`} passHref>
      <CardBox>
        <CardHead>
          <FlexColumn>
            <PostTitle>{title}</PostTitle>
            <TagWrapper>
              {question_tags && question_tags.map((tag) => <HashTag key={tag}>{tag}</HashTag>)}
            </TagWrapper>
          </FlexColumn>
          <ProfileBox>
            <ProfileImg
              src={`https://api-diggging.shop${user_profile_image}`}
              width={40}
              height={40}
              alt="profileImage"
              quality={100}
              // layout="fill"
              objectFit="cover"
            />
            <Username>{user_nickname}</Username>
          </ProfileBox>
        </CardHead>
        <ContentWrapper>
          <PostContent>{desc.replace(/(<([^>]+)>)/gi, "").slice(0, 440)}</PostContent>
        </ContentWrapper>
        <CardFooter>
          <PostDateInfo>
            {createdYear}년 {createdMonth}월 {createdDate}일 {createdHour}시 {createdMinutes}분
          </PostDateInfo>
          <div>
            {/* <BookMarkBtn /><NumberData>{scrap_num}</NumberData> */}
            <HeartBtn />
            <NumberData>{helped_num}</NumberData>
            <Hit>조회</Hit>
            <NumberData>{hits}</NumberData>
            {/* <Hit>답변 수</Hit>
          <NumberData>{answer_count}</NumberData> */}
          </div>
        </CardFooter>
        <Alert />
      </CardBox>
    </Link>
  );
}

export default ListCard;
