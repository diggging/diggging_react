import React from "react";
import styled from "styled-components";

function FlexColumn({ children }) {
  console.log(children);

  return <StyledFlexColumn>{children}</StyledFlexColumn>;
}

export default FlexColumn;

const StyledFlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
`;
