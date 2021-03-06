import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../../hocs/Layout";
import { setMine, setQuestion } from "../../../modules/questions";
import { BannerBackground, SubTitle } from "../../../pages/index";
import DigggingLogoReszie from "../../../public/static/images/DigggingLogoResize";
import NavBar from "../../common/NavBar/index";
import {
  Container,
  CreateBtn,
  DropBox,
  DropList,
  DropListItem,
  ImageContainer,
  QuestionsContainer,
  ServiceIntro,
  ServiceTitle,
  Tab,
  TabContainer,
  TabItemContainer,
  ToggleBtn,
  ToggleContainer,
} from "./style";

function Prevent({ children }) {
  const ref = useRef();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const { data, count, page, bigCriteria, smallCriteria, loading, error, mineToken } = useSelector(
    (state) => state.questions,
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [isRcent, setIsRcent] = useState(false);
  const [isPopular, setIsPopular] = useState(false);
  const [isMine, setIsMine] = useState(false);

  const ToggleDispatch = (bigCriteria, smallCriteria) => {
    if (bigCriteria !== undefined) {
      dispatch(setQuestion(1, bigCriteria, smallCriteria));
      setOpen(false);
    } else if (bigCriteria === "mine") {
      dispatch(setMine("mine", 1, smallCriteria, mineToken));
      setOpen(false);
    }
  };

  const styleHandle = () => {
    if (bigCriteria === "recent") {
      setIsRcent(true);
      setIsPopular(false);
      setIsMine(false);
    } else if (bigCriteria === "popular") {
      setIsRcent(false);
      setIsPopular(true);
      setIsMine(false);
    } else if (bigCriteria === "mine") {
      setIsRcent(false);
      setIsPopular(false);
      setIsMine(true);
    }
  };

  const style = {
    color: "#343434",
    fontFamily: "Pretendard-Bold",
    borderTop: "4px solid #ffd358",
  };

  useEffect(() => {
    styleHandle();
  }, [bigCriteria]);

  useEffect(() => {
    const checkClickOutSide = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", checkClickOutSide);

    return () => {
      document.addEventListener("click", checkClickOutSide);
    };
  }, [open]);

  return (
    <Layout>
      <NavBar />
      <BannerBackground>
        <Image
          src="/static/images/main_banner_back.png"
          quality={100}
          layout="fill"
          objectFit="cover"
        />
        <SubTitle>??????????????? ?????? ????????????,</SubTitle>
        <DigggingLogoReszie display="block" />
        <ServiceTitle>????????? ????????????, ????????????, ???????????????</ServiceTitle>
        <ServiceIntro>
          ???????????? ???????????? ????????? ????????? ???????????? ????????????
          <br />
          ???????????? ?????? ?????????????????? ????????? ????????????, ??????????????????!
          <br />
          ???????????? ??????????????? ????????? ?????????.
        </ServiceIntro>
      </BannerBackground>
      <Container>
        {isAuthenticated ? (
          <>
            <Link href="/question_create" passHref>
              <CreateBtn>????????????</CreateBtn>
            </Link>
          </>
        ) : null}
        <TabItemContainer>
          {isAuthenticated ? (
            <TabContainer>
              {isRcent ? (
                <>
                  <Link href="/recent">
                    <Tab style={style}>?????? ?????? ???</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/recent">
                    <Tab>?????? ?????? ???</Tab>
                  </Link>
                </>
              )}
              {isPopular ? (
                <>
                  <Link href="/popular">
                    <Tab style={style}>?????? ???</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/popular">
                    <Tab>?????? ???</Tab>
                  </Link>
                </>
              )}
              {isMine ? (
                <>
                  <Link href="/mine">
                    <Tab style={style}>?????? ?????? ??????</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/mine">
                    <Tab>?????? ?????? ??????</Tab>
                  </Link>
                </>
              )}
            </TabContainer>
          ) : (
            <TabContainer>
              {isRcent ? (
                <>
                  <Link href="/recent">
                    <Tab style={style}>?????? ?????? ???</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/recent">
                    <Tab>?????? ?????? ???</Tab>
                  </Link>
                </>
              )}
              {isPopular ? (
                <>
                  <Link href="/popular">
                    <Tab style={style}>?????? ???</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/popular">
                    <Tab>?????? ???</Tab>
                  </Link>
                </>
              )}
            </TabContainer>
          )}
          <ToggleContainer
            onClick={() => {
              setOpen(!open);
            }}
            ref={ref}
          >
            {smallCriteria === "all" ? (
              <>?????? ??????</>
            ) : smallCriteria === "wait_answer" ? (
              <>?????? ?????? ???</>
            ) : smallCriteria === "answer_done" ? (
              <>?????? ??????</>
            ) : null}
            <ToggleBtn />
          </ToggleContainer>
          {open ? (
            <DropBox>
              <DropList>
                <DropListItem onClick={() => ToggleDispatch(bigCriteria, "wait_answer")}>
                  ?????? ?????? ???
                </DropListItem>
                <DropListItem onClick={() => ToggleDispatch(bigCriteria, "answer_done")}>
                  ?????? ??????
                </DropListItem>
                <DropListItem onClick={() => ToggleDispatch(bigCriteria, "all")}>
                  ?????? ??????
                </DropListItem>
              </DropList>
            </DropBox>
          ) : null}
        </TabItemContainer>
        <QuestionsContainer>
          <>{children}</>
        </QuestionsContainer>
      </Container>
    </Layout>
  );
}

export default Prevent;
