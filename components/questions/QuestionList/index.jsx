import Link from "next/link";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMine, setPage, setQuestion } from "../../../modules/questions";
import FlexColumn from "../../common/FlexColumn";
import Paging from "../../Paging";
import {
  BottomContainer,
  BottomText,
  DescContainer,
  FlexContainer,
  HeartBtn,
  ListContainer,
  ListHash,
  ListHashContainer,
  ListTitle,
  ProfileContainer,
  ProfileImg,
  ProfileName,
  TitleHashContainer,
} from "./style";

function QuestionList({ data, count }) {
  const dispatch = useDispatch();
  const { page, bigCriteria, smallCriteria, loading, error, mineToken } = useSelector(
    (state) => state.questions,
  );
  const [removeTagDesc, setRemoveTagDesc] = useState([]);

  const postPage = (page) => {
    dispatch(setPage(page));
    if (bigCriteria !== undefined) {
      dispatch(setQuestion(page, bigCriteria, smallCriteria));
    } else if (bigCriteria === "mine") {
      dispatch(setMine("mine", page, smallCriteria, mineToken));
    }
  };

  return (
    <div>
      <ul>
        {removeTagDesc.length > 0 ? <></> : null}
        {data &&
          data.map((list) => (
            <Link href={`/questions/${list.id}`} key={list.id} passHref>
              <ListContainer>
                <FlexContainer>
                  <TitleHashContainer>
                    <FlexColumn>
                      <ListTitle>{list.title}</ListTitle>
                      <ListHashContainer>
                        {list.question_tags.map((hash) => (
                          <ListHash key={hash}>{hash}</ListHash>
                        ))}
                      </ListHashContainer>
                    </FlexColumn>
                    <ProfileContainer>
                      <ProfileImg
                        src={`${list.user.user_profile_image}`}
                        width={40}
                        height={40}
                        alt="profileImage"
                        quality={100}
                        // layout="fill"
                        objectFit="cover"
                      />
                      <ProfileName>{list.user.user_nickname}</ProfileName>
                    </ProfileContainer>
                  </TitleHashContainer>
                </FlexContainer>
                <DescContainer>
                  {list.desc.replace(/(<([^>]+)>)/gi, "").slice(0, 315)}
                </DescContainer>
                <BottomContainer>
                  <HeartBtn></HeartBtn>
                  <BottomText>{list.helped_num}</BottomText>
                  <BottomText>답변</BottomText>
                  <BottomText>{list.answer_count}</BottomText>
                  <BottomText>조회수</BottomText>
                  <BottomText>{list.hits}</BottomText>
                </BottomContainer>
              </ListContainer>
            </Link>
          ))}
      </ul>
      <Paging handlePageChange={postPage} page={page} count={count} />
    </div>
  );
}

export default React.memo(QuestionList);
