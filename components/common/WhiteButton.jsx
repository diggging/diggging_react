import { darken, lighten } from "polished";
import React from "react";
import styled from "styled-components";

function WhiteButton({ paddingTop, paddingRight, fontSize, children, type, onClick, marginRight }) {
  return (
    <StyledButton
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      fontSize={fontSize}
      type={type}
      onClick={onClick}
      marginRight={marginRight}
    >
      {children}
    </StyledButton>
  );
}

export default WhiteButton;

const StyledButton = styled.button`
  padding-top: ${({ paddingTop }) => paddingTop};
  padding-bottom: ${({ paddingTop }) => paddingTop};
  padding-right: ${({ paddingRight }) => paddingRight};
  padding-left: ${({ paddingRight }) => paddingRight};

  margin-right: ${({ marginRight }) => marginRight};
  border-radius: 1.25rem;
  border: solid 3px white;
  cursor: pointer;

  background-color: #fbfbfb;
  opacity: 80%;

  color: #5f5f5f;
  font-family: "Pretendard-SemiBold";
  font-size: ${({ fontSize }) => fontSize};
  box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.1);
  transition: 300ms;
  &:hover {
    background-color: ${lighten(0.02, "#FBFBFB")};
    box-shadow: 0 0.25rem 0.75rem 0 rgba(0, 0, 0, 0.15);
  }
  &:active {
    background-color: ${darken(0.02, "#FBFBFB")};
  }
`;
