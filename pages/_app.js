import "../public/static/fonts/font.css";
import "../public/static/css/Paging.css";

import Head from "next/head";
import React, { Component, useState } from "react";
import { Provider } from "react-redux";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

import theme from "../components/common/theme";
import { useStore } from "../redux/store.js";

const GlobalStyles = createGlobalStyle`
  ${reset};
    /* 기본정렬 */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Pretendard-Regular', 'Arial', sans-serif;
    line-height: 1.5;
    background-color: #FAFAFF;
  }
  /* 태그 설정 */
  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    font-family: 'Pretendard-Regular', 'Arial', sans-serif;
  }

  input::-ms-input-placeholder { color: #999893; }
  input::-webkit-input-placeholder { color: #999893; } 
  input::-moz-placeholder { color: #999893; }

  button {
    border: none;
    background-color: none;
    cursor: pointer;
  }
  .toastui-editor-contents {
    width: 940px;
  }
  .toastui-editor-contents p {
    font-size: 1rem;
    font-family: 'Pretendard-Regular';
    color: "#585858";
  }
  .toastui-editor-defaultUI-toolbar {
    width: 940px;
  }
  
`;

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Diggging</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;
