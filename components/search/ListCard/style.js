import styled from "styled-components";

import SvgBookMarkIcon from "../../../public/static/images/BookMarkIcon";
import SvgHeartIcon from "../../../public/static/images/HeartIcon";

export const CardHead = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
`;

export const CardBox = styled.button`
  min-width: 42.5rem;
  max-width: 67rem;
  width: 100%;
  height: 16rem;
  padding: 1.75rem 1.865rem 1.125rem 1.875rem;
  margin: auto;
  margin-bottom: 2rem;

  border-radius: 0.125rem;
  text-align: left;
  background-color: white;
  box-shadow: 0px 0.25rem 1.25rem 0px rgba(0, 0, 0, 0.04);
`;

//title 글자수 표시제한 필요:54글자로.
export const PostTitle = styled.h2`
  font-family: "Pretendard-SemiBold";
  color: #343434;
  font-size: 1.25rem;
  margin-bottom: 0.6rem;

  min-width: 36.125rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const TagWrapper = styled.div`
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

export const HashTag = styled.span`
  height: 1.125rem;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;

  border-radius: 1.25rem;
  background-color: #f1efe9;
  color: #7a7a7a;
  font-family: "Pretendard-SemiBold";
  font-size: 0.625rem;
  line-height: 1;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-left: 1rem;
  align-items: center;
`;

export const ProfileImg = styled(Image)`
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

export const Username = styled.span`
  font-family: "Pretendard-Medium";
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

export const ContentWrapper = styled.div`
  width: 100%;
  height: 6.75rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4; //4줄이면 자르기
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const PostContent = styled.p`
  font-family: "Pretendard-Regular";
  color: #8d8c85;
  font-size: 0.875rem;
  line-height: 1.625rem;
  height: 5.875rem;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    vertical-align: middle;
  }
  svg {
    vertical-align: middle;
  }
`;

export const PostDateInfo = styled.span`
  font-family: "Pretendard-Regular";
  font-size: 0.6rem;
  color: #8c8d8d;
`;

export const BookMarkBtn = styled(SvgBookMarkIcon)`
  cursor: pointer;
  margin-right: 0.625rem;
  vertical-align: middle;

  &:hover path {
    fill: #ffd358;
  }
`;
export const HeartBtn = styled(SvgHeartIcon)`
  margin-left: 1rem;
  vertical-align: middle;

  path {
    fill: #ffd358;
  }
  /* & :hover path{
    fill: #FFD358;
  } */
`;

export const NumberData = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 0.75rem;
  color: #8c8d8d;
  margin-left: 0.625rem;
`;

export const Hit = styled.span`
  font-family: "Pretendard-Semibold";
  font-size: 0.75rem;
  color: #8c8d8d;
  margin-left: 1rem;
`;
