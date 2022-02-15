import styled from "styled-components";

export const Container = styled.div`
  max-width: 23.75rem;
  height: 26.5rem;

  background-color: white;
  border: #e5e5e5;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 1.25rem 0 rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 4rem;
  right: 3.625rem;
  text-align: right;
`;

export const AlarmTop = styled.div`
  width: 100%;
  padding: 0.625rem 1.5rem;
  border-bottom: 1px solid #e5e5e5;
`;

export const DeleteAlarm = styled.button`
  border: none;
  background: none;
  padding: 0 0.6rem;

  cursor: pointer;
  color: #8d8c85;
  transition: 300ms;

  font-family: "Pretendard-Medium";
  font-size: 0.625rem;

  &:hover {
    color: #343434;
    font-family: "Pretendard-SemiBold";
  }
`;

export const AlarmBottom = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
  display: flex;
  flex-direction: column;
  overflow: scroll;

  /* 포인트 modal scroll 커스텀 */
  ::-webkit-scrollbar {
    width: 0.5rem;
  }

  /* 스크롤바 막대 설정*/
  ::-webkit-scrollbar-thumb {
    height: 17%;
    background-color: #e4e1d6;
    opacity: 70%;
    border-radius: 0.375rem;
  }

  /* 스크롤바 뒷 배경 설정*/
  ::-webkit-scrollbar-track {
    background-color: none;
  }
`;
