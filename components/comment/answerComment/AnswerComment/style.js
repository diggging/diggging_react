import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 44px;
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
  font-family: "Pretendard-Bold";
  font-size: 13px;
  line-height: 19px;
  color: #343434;
`;

export const CommentCount = styled.div`
  width: 100%;
  font-family: "Pretendard-Bold";
  font-size: 18px;
  line-height: 21px;
  color: #343434;
  padding-bottom: 20px;
`;
