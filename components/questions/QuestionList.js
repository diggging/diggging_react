import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import Paging from "../Paging";
import { setQuestion, setPage, setMine } from "../../modules/questions";
import HeartIcon from '../../public/static/images/HeartIcon.js';
import FlexColumn from "../common/FlexColumn";

function QuestionList({ data, count }) {
  
  const dispatch = useDispatch();
  const { page, bigCriteria, smallCriteria, loading, error, mineToken} = useSelector((state) => state.questions);
  const [removeTagDesc, setRemoveTagDesc] = useState([]);

  const postPage = (page) => {
    dispatch(setPage(page));
    if(bigCriteria !== undefined) {
      dispatch(setQuestion(page, bigCriteria, smallCriteria));
    } else if (bigCriteria === undefined) {
      dispatch(setMine(page, smallCriteria, mineToken));
    }
  };
  
  return (
    <div>
      <ul>
        {removeTagDesc.length > 0 ? (<></>) : null}
        {data && data.map((list) => (
          <Link href={`/questions/${list.id}`} passHref>
            <ListContainer key={list.id}>
              <FlexContainer>
                <TitleHashContainer>
                  <FlexColumn>
                    <ListTitle>{list.title}</ListTitle>
                    <ListHashContainer>
                      {list.question_tags.map((hash) => (
                        <ListHash>{hash}</ListHash>
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
              <DescContainer>{list.desc.replace(/(<([^>]+)>)/ig,"").slice(0, 315)}</DescContainer>
              <BottomContainer>
                <HeartBtn></HeartBtn>
                <BottomText>
                  {list.helped_num}
                </BottomText>
                <BottomText>
                  답변
                </BottomText>
                <BottomText>
                  {list.answer_count}
                </BottomText>
                <BottomText>
                  조회수
                </BottomText>
                <BottomText>
                  {list.hits}
                </BottomText>
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

const ListContainer = styled.ul`
  min-width: 42.5rem;
  max-width: 67rem;
  width: 100%;
  height: 16rem;
  padding: 1.75rem 1.865rem 1.125rem 1.875rem;
  margin: auto;
  text-align: left;
  background-color: white;
  box-shadow: 0rem 0.25rem 1.25rem rgba(0, 0, 0, 0.04);
  border-radius: 0.125rem;
  
  margin-bottom: 2rem;

  cursor: pointer;
  &:hover {
    transition: ease-in-out 300ms;
    transform: translateY(-6px);
    box-shadow: 0rem 0.25rem 1.25rem rgba(0, 0, 0, 0.05);
  }
`;

const TitleHashContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

const ListTitle = styled.div`
  font-family: 'Pretendard-SemiBold';
  color: #343434;
  font-size: 1.25rem;
  margin-bottom: 0.6rem;
  min-width: 36.125rem;
  line-height: 1.8125rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ListHashContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 36.125rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const ListHash = styled.span`
  height: 1.125rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  
  border-radius: 1.25rem;
  background-color: #F1EFE9;
  color: #7a7a7a;
  font-family: 'Pretendard-SemiBold';
  font-size: 0.625rem;
  line-height: 1;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
  align-items: center;
`;

const ProfileImg = styled(Image)`
  border-radius: 50%;
  margin-bottom: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  margin: auto auto;
  margin-bottom: 4px;

  & > img {
    margin-bottom: 0.25rem;
  }
`;

const ProfileName = styled.span`
  font-family: 'Pretendard-Medium';
  color: #343434;
  font-size: 0.875rem;
  text-align: center;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 7px;
`;

const DescContainer = styled.div`
  width: 100%;
  height: 6.75rem;
  font-family: 'Pretendard-Regular';
  font-size: 0.875rem;
  line-height: 1.625rem;
  color: #8d8c85;
  overflow: hidden;
  margin-top: 19px;
  height: 5.875rem;
  
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4; //4줄이면 자르기
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

const BottomText = styled.div`
  height: 16px;
  font-family: 'Pretendard-Regular';
  font-size: 0.6rem;
  line-height: 16px;
  text-align: right;
  margin-left: 5px;
  color: #8C8D8D;
  padding: 1.5px;
`;

const HeartBtn = styled(HeartIcon)`
  margin-left: 1rem;
  vertical-align: middle;

  path {
    fill: #FFD358;
  }
  /* & :hover path{
    fill: #FFD358;
  } */
`;