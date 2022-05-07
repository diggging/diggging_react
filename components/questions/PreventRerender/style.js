import styled from "styled-components";

import SvgToggleBtn from "../../../public/static/images/ToggleBtn";

export const ServiceTitle = styled.h3`
  color: #343434;
  font-family: "Pretendard-Bold";
  /* letter-spacing: -4; */
  font-size: 1.4rem;
  margin-top: 2rem;
`;

export const ServiceIntro = styled.p`
  min-width: 454px;
  color: #343434;
  font-family: "Pretendard-Medium";
  font-size: 1.2rem;
  line-height: 2rem;
  margin-top: 0.5rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  /* width: 100%; */
  height: 33.125rem;
  width: 100%;
`;
export const Container = styled.div`
  width: 1068px;
  height: 100vh;
  margin: 0 auto;
`;

export const CreateBtn = styled.button`
  width: 150px;
  height: 50px;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 4px 4px 8px rgba(170, 170, 170, 0.1);
  font-family: "Pretendard-Bold";
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #706969;
  float: right;
  margin: 24px 24px;
`;

export const TabItemContainer = styled.div`
  width: 100%;
  height: 70px;
  border-top: 2px solid rgba(219, 214, 199, 0.4);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 1.25rem;
  margin-top: 98px;
  position: relative;
  margin-bottom: 46px;
`;

export const TabContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const Tab = styled.div`
  font-family: "Pretendard-SemiBold";
  width: 130px;
  height: 53px;
  color: #898a90;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  line-height: 28.96px;
  transition: 300ms;
  padding-top: 0.75rem;

  &:hover {
    font-family: "Pretendard-Bold";
    color: #343434;
  }
`;

export const ToggleBtn = styled(SvgToggleBtn)`
  margin-left: 0.5rem;
  &path {
    fill: #343434;
  }
`;

export const QuestionsContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
`;

export const ToggleContainer = styled.button`
  background: white;
  width: 8.25rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  transition: 300ms;
  font-family: "Pretendard-Bold";
  color: #343434;
  font-size: 1rem;
  transition: 300ms;
  cursor: pointer;

  & svg {
    margin-left: 10px;
  }
  & path {
    fill: #343434;
  }
`;

export const DropBox = styled.div`
  width: 8.25rem;
  /* height: 8.1875rem; */
  position: absolute;
  right: 1.8%;
  top: 100%;
  z-index: 5;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const DropList = styled.ul`
  text-align: center;
  list-style: none;
  line-height: 2rem;
  font-family: "Pretendard-Regular";
  font-size: 0.875rem;
`;

export const DropListItem = styled.li`
  color: #b6b6b6;
  padding: 5px 10px;
  cursor: pointer;
  transition: 200ms;
  font-size: 0.9375rem;
  &:hover {
    color: #343434;
    font-family: "Pretendard-SemiBold";
  }
`;
