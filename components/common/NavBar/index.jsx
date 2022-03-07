// import Alarm from "../public/static/images/Alarm";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
// import img from '../public/static/images/profile_img.jpg'; //기본 프로필이미지 넣어주기
import { useDispatch, useSelector } from "react-redux";

import SvgDiggging from "../../../public/static/images/Diggging";
import NavSearch from "../../../public/static/images/Search";
// import Directory from '../public/static/images/Directory';
import ToggleBtn from "../../../public/static/images/ToggleBtn";
import { load_user, logout } from "../../../redux/actions/auth";
// import { check_auth_status } from "../redux/actions/auth";
// import { changePage } from "../modules/questions";
// import AlarmContainer from "./AlarmContainer";
import {
  DropBox,
  DropList,
  DropListItem,
  LogoutButton,
  Nav,
  NavItem,
  NavLeft,
  NavRight,
  ToggleContainer,
  // UserImg,
} from "./style";

function NavBar() {
  const dispatch = useDispatch();
  const ref = useRef();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const [open, setOpen] = useState({
    alarmOpen: false,
    profileOpen: false,
  });
  const [alarmData, setAlarmData] = useState([]);
  const [profileImage, setProfileImage] = useState("");
  const { alarmOpen, profileOpen } = open;

  const logoutHandler = async () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) await dispatch(logout());
    router.push("/loginPage");
  };

  //계정설정 이동시 유저 데이터 넘겨주기
  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(load_user());
    }
  }, []);

  useEffect(() => {
    const checkClickOutSide = (e) => {
      if (profileOpen === true && ref.current && !ref.current.contains(e.target)) {
        setOpen({ ...open, profileOpen: false });
      }
    };

    document.addEventListener("click", checkClickOutSide);

    return () => {
      document.addEventListener("click", checkClickOutSide);
    };
  }, [profileOpen]);

  const getAlarmList = async () => {
    try {
      const apiRes = axios.get("");

      if (apiRes.status === 200) {
        setAlarmData(apiRes.data);
      } else {
        setAlarmData([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Nav>
        <NavLeft>
          <Link href="/" passHref>
            <NavItem>
              <SvgDiggging />
            </NavItem>
          </Link>
          <Link
            href="https://www.notion.so/diggingdigging/About-diggging-afdb745738b74492900ac5f9c2a431d2"
            passHref
          >
            <NavItem target="blank">디깅소개</NavItem>
          </Link>
          {/* <Link href="/main" passHref>
            <NavItem>메인</NavItem>
          </Link> */}
          {/* {isAuthenticated ? (
            <>
              <Link href="/questions" passHref>
                <NavItem>질문광장</NavItem>
              </Link>
            </>
          ) : (
            <></>
          )} */}
        </NavLeft>
        <NavRight>
          <Link href="/search" passHref>
            <NavItem>
              <NavSearch height="1.5rem" width="1.375rem" />
            </NavItem>
          </Link>
          {isAuthenticated ? (
            <>
              {/* <Link href="/" passHref>
                <NavItem>
                  <Alarm
                    onClick={() => {
                      setOpen({ ...open, alarmOpen: !alarmOpen });
                    }}
                  />
                </NavItem>
              </Link>
              {alarmOpen && <AlarmContainer />} */}
              {/* <Link href="/" passHref>
                <NavItem>
                  <Directory />
                </NavItem>
              </Link> */}
              <NavItem>
                <ToggleContainer
                  onClick={() => {
                    setOpen({ ...open, profileOpen: !profileOpen });
                  }}
                  ref={ref}
                >
                  {user?.user.user_profile_image ? (
                    <>
                      <Image
                        src={`https://api-diggging.shop${user.user.user_profile_image}`}
                        width={40}
                        height={40}
                        alt="profileImage"
                        quality={90}
                        // layout="fill"
                        objectFit="cover"
                      />
                    </>
                  ) : null}
                  <ToggleBtn />
                </ToggleContainer>
                {profileOpen && (
                  <DropBox>
                    <DropList>
                      <DropListItem>
                        <Link href="/questionCreate">새 글 작성</Link>
                      </DropListItem>
                      <DropListItem>
                        <Link
                          // href={{
                          //   pathname: `/accountSetting`,
                          //   query: {user: JSON.stringify(user)},
                          // }}
                          // as={`/accountSetting`}
                          href="/accountSetting"
                        >
                          계정설정
                        </Link>
                      </DropListItem>
                      <DropListItem>
                        <LogoutButton onClick={logoutHandler}>로그아웃</LogoutButton>
                      </DropListItem>
                    </DropList>
                  </DropBox>
                )}
              </NavItem>
            </>
          ) : (
            <>
              <Link href="/loginPage" passHref>
                <NavItem>로그인</NavItem>
              </Link>
              <Link href="/signup" passHref>
                <NavItem>회원가입</NavItem>
              </Link>
            </>
          )}
        </NavRight>
      </Nav>
    </div>
  );
}

export default NavBar;
