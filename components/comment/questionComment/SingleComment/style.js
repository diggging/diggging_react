import styled from "styled-components";

export const CommentContainer = styled.ul`
  width: 100%;
  height: 100%;
  margin-top: 23px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ececec;
  padding-top: 23px;
`;

export const UserImg = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50px;
  margin-right: 20px;
  & img {
    border-radius: 50%;
  }
`;

export const UserInfoContainer = styled.div`
  width: 934px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
`;

export const NameDateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const UserNickName = styled.div`
  font-family: "Pretenard-Bold";
  font-size: 14px;
  line-height: 20px;
  color: #343434;
  margin-right: 10px;
`;

export const CommentDate = styled.div`
  font-family: "Pretenard-Regular";
  font-size: 12px;
  line-height: 17px;
  color: #b8b7b4;
`;

export const CommentText = styled.div`
  font-family: "Pretenard-Regular";
  font-size: 14px;
  line-height: 22px;
  color: #585858;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.div`
  width: 100%;
  font-family: "Pretendard-Bold";
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #bababa;
  cursor: pointer;
  margin-left: 0.8125rem;

  &:hover {
    color: #212529;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CommentUpdateContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const CommentInput = styled(TextareaAutosize)`
  resize: none;
  width: 758px;
  min-height: 6.125rem;
  border: 1px solid #ececec;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 1rem 1rem 1.5rem;
  font-family: "Pretendard-Regular";
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
  margin-right: 30px;
  &:focus {
    outline: 0;
  }
`;

export const CommentSendBtn = styled.button`
  width: 114px;
  height: 38px;
  background: #ffd358;
  box-shadow: 4px 4px 8px rgba(170, 170, 170, 0.1);
  border-radius: 20px;
  font-family: "Pretenard-Bold";
  font-size: 13px;
  line-height: 19px;
  color: #343434;
`;
