import styled from "styled-components";

export const MainContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const Container = styled.div`
  width: 64rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  background-color: #ffffff;
  margin: auto;
  padding: 2.625rem;
`;

export const HeadContainer = styled.div`
  width: 58.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  border-bottom: 1px solid #ececec;
  padding-bottom: 0.625rem;
  margin-bottom: 0.625rem;
`;

export const Title = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 1.75rem;
  line-height: 3rem;
  color: #212529;
`;

export const Selection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard-Regular";
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #5f5f5f;
`;

export const SelectionText = styled.div`
  margin-right: 1rem;
`;

export const SecondContainer = styled.div`
  width: 58.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 0.625rem;
  margin-bottom: 0.3125rem;
`;

export const Data = styled.div`
  margin-right: auto;
  height: 19px;
  font-family: "Pretendard-Regular";
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #b8b7b4;
`;

export const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Btn = styled.div`
  width: 100%;
  height: 1.1875rem;
  font-family: "Pretendard-Bold";
  font-size: 0.8125rem;
  line-height: 1.1875rem;
  text-align: center;
  color: #5f5f5f;
  cursor: pointer;
  margin-left: 0.8125rem;

  &:hover {
    color: #212529;
  }
`;

export const DescContainer = styled.div`
  margin-top: 60px;
  margin-bottom: 60px;
  text-align: start;
`;

export const FlexContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AnswerBtn = styled.div`
  width: 98px;
  height: 37px;
  border-radius: 25px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  font-family: "Pretendard-Bold";
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #5f5f5f;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
  cursor: pointer;
`;

export const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  margin-top: 25px;
  padding: 30px 20px;
  margin-bottom: 32px;
`;

export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  margin-right: 20px;
  & img {
    border-radius: 50%;
  }
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  margin-right: 20px;
`;

export const ProfileName = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 16px;
  line-height: 23px;
  color: #343434;
`;

export const ProfileLevel = styled.div`
  font-family: "Pretendard-Bold";
  font-size: 12px;
  line-height: 17px;
  color: #7a7a7a;
`;

export const ProfileContent = styled.div`
  width: 672px;
  height: 38px;
  font-family: "Pretendard-Regular";
  font-size: 13px;
  line-height: 19px;
  color: #8d8c85;
  display: flex;
  align-items: center;
`;
