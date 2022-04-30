import Link from "next/link";
import styled from "styled-components";

const Nav = styled.nav`
  /* min-width: 42.5rem; */
  z-index: 1000;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 3.8rem;
  box-shadow: 0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.05);
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 3.125rem;
`;

const NavItem = styled.a`
  font-family: "Pretendard-SemiBold";
  display: flex;
  margin: 0.5rem 0.5rem;
  border-radius: 0.625rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding-right: 0.4rem;
  color: #b6b6b6;
  align-items: center;

  &:hover {
    color: #202020;
    font-family: "Pretendard-Bold";
    transition: all ease-in 200ms;
  }

  &:hover path {
    fill: #202020;
    transition: all ease-in 200ms;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 3.125rem;
`;

const ToggleContainer = styled.button`
  background-color: #ffffff;
  border-radius: 0.625rem;
  text-align: center;
  padding: 0.3125rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #9faeb6;
  position: relative;

  & svg {
    margin-left: 10px;
  }

  & img {
    border-radius: 50%;
  }
`;

const UserImg = styled.div`
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #b6b6b6;
`;

const DropBox = styled.div`
  background-color: white;
  box-shadow: -0.25rem -0.25rem 0.875rem 0px rgba(0, 0, 0, 0.05);
  position: absolute;
  top: 64px;
  right: 60px;
  border-radius: 0.25rem;
`;

const DropList = styled.ul`
  list-style: none;
  line-height: 2.375rem;
  font-family: "Pretendard-Medium";
`;

const DropListItem = styled.li`
  color: #b6b6b6;
  cursor: pointer;

  &:first-child:hover a {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:hover a {
    color: #343434;
    font-family: "Pretendard-SemiBold";
    background: #f4f4f4;
  }

  & > a {
    transition: 300ms;
    display: block;
    width: 9.25rem;
  }
`;
const LogoutButton = styled.button`
  color: #b6b6b6;
  width: 9.25rem;
  cursor: pointer;
  background: none;
  border: none;
  font-family: "Pretendard-Medium";
  font-size: 1rem;
  padding: 0;
  height: 2.375rem;
  transition: 300ms;
  &:hover {
    color: #343434;
    font-family: "Pretendard-SemiBold";
    background: #f4f4f4;
    border-bottom-left-radius: 0.025rem;
    border-bottom-right-radius: 0.025rem;
  }
`;

export {
  DropBox,
  DropList,
  DropListItem,
  LogoutButton,
  Nav,
  NavItem,
  NavLeft,
  NavRight,
  ToggleContainer,
  UserImg,
};
