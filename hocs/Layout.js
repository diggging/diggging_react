import Head from "next/head";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

// import { setDesc } from "../modules/editor";
import { check_auth_status } from "../redux/actions/auth";
import { applyMediaQuery } from "../styles/MediaQuery";
import { DEVICE_QUERY } from "../styles/Responsive";

const Layout = ({ title, content, children }) => {
  const dispatch = useDispatch();

  //token 확인(refresh, verify)
  useEffect(() => {
    // dispatch(load_user());
    dispatch(check_auth_status());
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
      </Head>
      <BackgroundColor />
      <div>{children}</div>
    </>
  );
};

Layout.defaultProps = {
  title: "Diggging",
  content: "개발자를 위한 코드기록 및 질문 커뮤니티",
};

export default Layout;
const BackgroundColor = styled.div`
  ${applyMediaQuery(DEVICE_QUERY.mobile)} {
    background-color: white;
  }
  background-color: #fafaff;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -10;
`;
