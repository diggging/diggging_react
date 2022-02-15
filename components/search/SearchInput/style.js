import styled, { css } from "styled-components";
export const SearchInputBox = styled.div`
  margin: 7.125rem auto 2.25rem auto;
  width: 46.25rem;
  padding: 0 1.875rem;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: white;
  border: solid 1px #e5e5e5;
  border-radius: 0.25rem;
  background-color: white;

  &:hover path {
    fill: #202020;
    transition: all ease-in 200ms;
  }
`;

export const StyledSearchInput = styled.input`
  ${({ theme }) => {
    const { colors, device } = theme;

    return css`
      width: 100%;
      height: 4.5rem;
      margin-left: 1.2rem;
      border: none;
      outline: none;

      font-size: 1.5rem;
      font-family: "Pretendard-Regular";
      color: ${colors.grey}; //c4c4c4

      &:hover {
        transition: 300ms;
        color: ${colors.black};
        font-family: "Pretendard-Medium";
      }

      ::placeholder {
        color: ${colors.grey};
      }
      ::placeholder:hover {
        color: ${colors.black};
      }

      &:active {
        outline: none;
      }
      ${device.tablet} {
        font-size: 1.375rem;
      }

      ${device.mobile} {
        font-size: 1.25rem;
      }
    `;
  }}
`;
