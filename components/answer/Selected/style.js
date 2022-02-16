import styled from "styled-components";

export const SelectedContainer = styled.div`
  position: absolute;
  width: 12.5rem;
  height: 5rem;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  top: -5.9375rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const IsSelected = styled.div`
  height: 100%;
  font-family: "Pretendard-Bold";
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #343434;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const SelectedBtn = styled.button`
  width: 100px;
  height: 39px;
  background: #ffffff;
  font-family: "Pretendard-Bold";

  &:hover {
    background: rgba(196, 196, 196, 0.15);
  }
`;
