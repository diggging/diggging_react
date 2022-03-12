import styled from "styled-components";
export const Container = styled.div`
  position: fixed;
  right: 2%;
  top: 10%;
`;

export const ElementContainer = styled.div`
  width: 145px;
  height: 93px;
  background: #f5f5f5;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Element = styled.div`
  margin: 0 auto;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  font-family: "Pretendard-Bold";
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #5f5f5f;
`;

export const LinkClickAlarm = styled.div`
  width: 145px;
  height: 50px;
  background: #f5f5f5;
  border-radius: 20px;
  font-family: "Pretendard-Bold";
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #5f5f5f;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;
