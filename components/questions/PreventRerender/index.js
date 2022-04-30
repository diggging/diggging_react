import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../../hocs/Layout";
import { setMine, setQuestion } from "../../../modules/questions";
import { BannerBackground, SubTitle } from "../../../pages/index";
import SvgDigggingLogo from "../../../public/static/images/DigggingLogo";
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
  // console.log(bigCriteria);

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
        <SubTitle>개발자들을 위한 커뮤니티,</SubTitle>
        <SvgDigggingLogo display="block" />
        <ServiceTitle>디깅에 기록하고, 질문하고, 공유하세요</ServiceTitle>
        <ServiceIntro>
          질문하고 기록하는 습관은 누구든 성장하게 해줍니다
          <br />
          개발도중 겪는 시행착오들을 디깅에 기록하고, 공유해보세요!
          <br />
          실력있는 개발자들이 함께할 거에요.
        </ServiceIntro>
      </BannerBackground>
      <Container>
        {isAuthenticated ? (
          <>
            <Link href="/questionCreate" passHref>
              <CreateBtn>질문하기</CreateBtn>
            </Link>
          </>
        ) : null}
        <TabItemContainer>
          {isAuthenticated ? (
            <TabContainer>
              {isRcent ? (
                <>
                  <Link href="/recent">
                    <Tab style={style}>최신 질문 순</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/recent">
                    <Tab>최신 질문 순</Tab>
                  </Link>
                </>
              )}
              {isPopular ? (
                <>
                  <Link href="/popular">
                    <Tab style={style}>인기 순</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/popular">
                    <Tab>인기 순</Tab>
                  </Link>
                </>
              )}
              {isMine ? (
                <>
                  <Link href="/mine">
                    <Tab style={style}>내가 남긴 질문</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/mine">
                    <Tab>내가 남긴 질문</Tab>
                  </Link>
                </>
              )}
            </TabContainer>
          ) : (
            <TabContainer>
              {isRcent ? (
                <>
                  <Link href="/recent">
                    <Tab style={style}>최신 질문 순</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/recent">
                    <Tab>최신 질문 순</Tab>
                  </Link>
                </>
              )}
              {isPopular ? (
                <>
                  <Link href="/popular">
                    <Tab style={style}>인기 순</Tab>
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/popular">
                    <Tab>인기 순</Tab>
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
              <>답변 전체</>
            ) : smallCriteria === "wait_answer" ? (
              <>답변 대기 중</>
            ) : smallCriteria === "answer_done" ? (
              <>답변 완료</>
            ) : null}
            <ToggleBtn />
          </ToggleContainer>
          {open ? (
            <DropBox>
              <DropList>
                <DropListItem onClick={() => ToggleDispatch(bigCriteria, "wait_answer")}>
                  답변 대기 중
                </DropListItem>
                <DropListItem onClick={() => ToggleDispatch(bigCriteria, "answer_done")}>
                  답변 완료
                </DropListItem>
                <DropListItem onClick={() => ToggleDispatch(bigCriteria, "all")}>
                  답변 전체
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
