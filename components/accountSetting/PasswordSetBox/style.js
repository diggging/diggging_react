import styled from "styled-components";

export const PasswordResetBox = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.875rem 0;
  border-bottom: solid 2px #e5e5e5;
  justify-content: space-between;
`;

export const PasswordInputBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 2.125rem;
`;

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const PasswordMessage = styled(ContentText)`
  margin-bottom: 2.125rem;
`;

export const ErrorMsg = styled.span`
  font-family: "Pretendard-Medium";
  font-size: 0.75rem;
  color: #b6b6b6;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
`;
