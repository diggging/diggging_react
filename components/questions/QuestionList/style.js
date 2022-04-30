import Image from "next/image";
import styled from "styled-components";

import HeartIcon from "../../../public/static/images/HeartIcon";

export const ListContainer = styled.ul`
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
    transition: all 200ms ease-in;
    transform: translateY(-2px);
    box-shadow: 10px 20px 20px 0 rgb(92 95 112 / 8%);
    & p {
      transition: all 200ms ease-in;
      color: #343434;
    }
  }
`;

export const TitleHashContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1rem;
  width: 100%;
`;

export const ListTitle = styled.h2`
  font-family: "Pretendard-SemiBold";
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

export const ListHashContainer = styled.div`
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

export const ListHash = styled.span`
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

export const ProfileContainer = styled.div`
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

export const ProfileName = styled.span`
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

export const DescContainer = styled.p`
  width: 100%;
  height: 6.75rem;
  font-family: "Pretendard-Regular";
  font-size: 0.875rem;
  line-height: 1.625rem;
  color: #8d8c85;
  overflow: hidden;
  height: 5.875rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4; //4줄이면 자르기
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const BottomText = styled.p`
  height: 16px;
  font-family: "Pretendard-Regular";
  font-size: 0.6rem;
  line-height: 16px;
  text-align: right;
  margin-left: 5px;
  color: #8c8d8d;
  padding: 1.5px;
`;

export const HeartBtn = styled(HeartIcon)`
  margin-left: 1rem;
  vertical-align: middle;

  path {
    fill: #ffd358;
  }
  /* & :hover path{
    fill: #FFD358;
  } */
`;
