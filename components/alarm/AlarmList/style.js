import styled from "styled-components";

export const ListBox = styled.button`
  width: 100%;
  max-height: 4.875rem;
  display: flex;
  flex-direction: row;
  background: none;
  border-bottom: solid 1px #e5e5e5;
`;

export const AlarmIconBox = styled.div`
  width: 3.75rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AlarmContentBox = styled.div`
  padding: 0.625rem 0.25rem;
  max-width: 16.75rem;
  text-align: left;
`;

export const AlarmPostTitle = styled.h5`
  font-family: "Pretendard-Medium";
  color: #343434;
  font-size: 0.75rem;
  margin-bottom: 0.125rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1; //1줄이면 자르기
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AlarmPostContent = styled.p`
  font-family: "Pretendard-Regular";
  color: #8d8c85;
  font-size: 0.6875rem;

  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 1; //1줄이면 자르기
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const AlarmTime = styled.p`
  font-family: "Pretendard-Regular";
  color: #b6b6b6;
  font-size: 0.6875rem;
  margin-top: 0.2rem;
`;

export const ProfileImg = styled(Image)`
  width: 1.875rem;
  height: 1.875rem;
  object-fit: cover;
  border-radius: 50%;
  border: 0px;
`;
