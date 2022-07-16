import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import NavBar from "../components/common/NavBar";
import Footer from "../components/Footer";
import QuestionList from "../components/questions/QuestionList";
import Layout from "../hocs/Layout";
import { setQuestion } from "../modules/questions";
import DigggingLogoReszie from "../public/static/images/DigggingLogoResize";
import SvgToggleBtn from "../public/static/images/ToggleBtn";

function Main() {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();
  const {
    data,
    count,
    page,
    bigCriteria,
    smallCriteria,
    // loading, error
  } = useSelector((state) => state.questions);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(setQuestion(1, "recent", "all"));
  }, [dispatch]);

  //여기도 고쳐야함
  const ToggleDispatch = (smallCriteria) => {
    dispatch(setQuestion(1, "recent", smallCriteria));
    setOpen(false);
  };

  const style = {
    color: "#343434",
    borderTop: "4px solid #ffd358",
  };

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
        <DigggingLogoReszie display="block" />
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
            <Link href="/question_create" passHref>
              <CreateBtn>질문하기</CreateBtn>
            </Link>
          </>
        ) : null}
        <TabItemContainer>
          {isAuthenticated ? (
            <TabContainer>
              <Link href="/recent">
                <Tab style={style}>최신 질문 순</Tab>
              </Link>
              <Link href="/popular">
                <Tab>인기 순</Tab>
              </Link>
              <Link href="/mine">
                <Tab>내가 남긴 질문</Tab>
              </Link>
            </TabContainer>
          ) : (
            <TabContainer>
              <Link href="/recent">
                <Tab style={style}>최신 질문 순</Tab>
              </Link>
              <Link href="/popular">
                <Tab>인기 순</Tab>
              </Link>
            </TabContainer>
          )}
          <ToggleContainer
            onClick={() => {
              setOpen(!open);
            }}
          >
            {" "}
            {smallCriteria === "all" ? (
              <>답변 전체</>
            ) : smallCriteria === "wait_answer" ? (
              <>답변 대기 중</>
            ) : smallCriteria === "answer_done" ? (
              <>답변 완료</>
            ) : null}
            <SvgToggleBtn />
          </ToggleContainer>
          {open ? (
            <DropBox>
              <DropList>
                <DropListItem onClick={() => ToggleDispatch("wait_answer")}>
                  답변 대기 중
                </DropListItem>
                <DropListItem onClick={() => ToggleDispatch("answer_done")}>답변 완료</DropListItem>
                <DropListItem onClick={() => ToggleDispatch("all")}>답변 전체</DropListItem>
              </DropList>
            </DropBox>
          ) : null}
        </TabItemContainer>
        <QuestionsContainer>
          <QuestionList data={data} count={count} />
        </QuestionsContainer>
      </Container>
      <Footer />
    </Layout>
  );
}
export { BannerBackground, SubTitle };
export default Main;

const BannerBackground = styled.div`
  width: 100%;
  height: 27rem;
  position: relative;
  padding: 4rem 6rem;
  & img {
    z-index: -2;
  }

  @media ${({ theme: { device } }) => device.laptop} {
    padding: 4rem 6rem;
  }
  @media ${({ theme: { device } }) => device.tablet} {
    padding: 4rem 5rem;
  }
  @media ${({ theme: { device } }) => device.mobile} {
    padding: 4rem 3rem;
  }
`;

const SubTitle = styled.h2`
  margin-top: 2.5rem;
  color: white;
  font-family: "Pretendard-Bold";
  font-size: 1.3rem;
  display: inline-block;
  background-color: #ffba42;
  margin-bottom: 1rem;
  padding: 0.2rem 1.4rem;
  border-radius: 0.4rem;
`;

const ServiceTitle = styled.h3`
  color: #343434;
  font-family: "Pretendard-Bold";
  /* letter-spacing: -4; */
  font-size: 1.4rem;
  margin-top: 2rem;
`;

const ServiceIntro = styled.p`
  min-width: 454px;
  color: #343434;
  font-family: "Pretendard-Medium";
  font-size: 1.2rem;
  line-height: 2rem;
  margin-top: 0.5rem;
`;

const Container = styled.div`
  width: 1068px;
  /* height: 100vh; */
  margin: 0 auto;
`;

const CreateBtn = styled.button`
  width: 150px;
  height: 50px;
  background: #ffffff;
  border-radius: 25px;
  box-shadow: 4px 4px 8px rgba(170, 170, 170, 0.1);
  font-family: "Pretendard-Bold";
  font-size: 16px;
  line-height: 32px;
  letter-spacing: 0.01em;
  color: #706969;
  float: right;
  margin: 24px 24px;
`;

const TabItemContainer = styled.div`
  width: 100%;
  height: 70px;
  border-top: 2px solid rgba(219, 214, 199, 0.4);
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  padding: 0 1.25rem;
  margin-top: 98px;
  position: relative;
  margin-bottom: 46px;
`;

const TabContainer = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const Tab = styled.div`
  font-family: "Pretendard-SemiBold";
  width: 130px;
  height: 53px;
  color: #898a90;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  line-height: 28.96px;
  padding-top: 0.75rem;
  transition: 300ms;

  &:hover {
    color: #343434;
    font-family: "Pretendard-Bold";
  }
`;

const QuestionsContainer = styled.div`
  width: 100%;
  /* height: 100vh; */
`;
const ToggleContainer = styled.button`
  background: white;
  width: 8.25rem;
  height: 2.5rem;
  border-radius: 0.625rem;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-weight: 600;
  color: rgb(73, 80, 87);
  font-size: 0.875rem;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  transition: 300ms;
  font-family: "Pretendard-Bold";
  color: #343434;
  font-size: 1rem;
  transition: 300ms;
  cursor: pointer;

  & svg {
    margin-left: 10px;
  }
  & path {
    fill: #343434;
  }
`;

const DropBox = styled.div`
  width: 8.25rem;
  /* height: 8.1875rem; */
  position: absolute;
  right: 1.8%;
  top: 100%;
  z-index: 5;
  background: #ffffff;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

const DropList = styled.ul`
  text-align: center;
  list-style: none;
  line-height: 2rem;
  font-family: "Pretendard-Regular";
  font-size: 0.875rem;
`;

const DropListItem = styled.li`
  color: #b6b6b6;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 0.9375rem;
  transition: 200ms;

  &:hover {
    color: #343434;
    font-family: "Pretendard-Medium";
  }
`;
