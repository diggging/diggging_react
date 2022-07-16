import Link from "next/link";
import React from "react";
import styled from "styled-components";

import FooterDigggingLogo from "../public/static/images/FooterDigggingLogo";

function Footer() {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <FooterContentWrapper>
          <FooterDigggingLogo />
          <FooterSecondSpan>개발자들을 위한 커뮤니티</FooterSecondSpan>
        </FooterContentWrapper>

        <Content>
          <FooterServiceContentBox>
            <FooterFirstSpan>Diggging</FooterFirstSpan>
            <FooterSpan>서비스 소개</FooterSpan>
            <FooterSpan>홈 피드</FooterSpan>
            <FooterSpan>
              <Link href="/signup" passHref>
                회원가입
              </Link>
            </FooterSpan>
          </FooterServiceContentBox>

          <FooterContentBox>
            <FooterFirstSpan>Contact</FooterFirstSpan>
            <FooterSpan>서비스 피드백</FooterSpan>
            <FooterSpan>문의하기</FooterSpan>
          </FooterContentBox>
        </Content>
      </FooterContentContainer>
      <FooterBottom>
        {/* <FooterThirdSpan>ⓒ Diggging All rights reserved.</FooterThirdSpan> */}
        <FooterThirdSpan>ⓒ Diggging All rights reserved.</FooterThirdSpan>
      </FooterBottom>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  height: 18.75rem;
  background: var(--gray1);
`;

const FooterContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(52, 52, 52, 0.2);
`;

const FooterContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const Content = styled.div`
  display: flex;
  padding-right: 1rem;
`;

const FooterServiceContentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 54px;
`;

const FooterContentBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterFirstSpan = styled.span`
  font-family: "Pretendard-bold";
  font-size: 20px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: #4a4a4a;
  margin: 1rem 0;
`;

const FooterSecondSpan = styled.span`
  font-family: "Pretendard";
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: #4a4a4a;
  margin: 1rem 0;
`;

const FooterThirdSpan = styled.span`
  font-family: "Pretendard";
  font-size: 14px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: rgba(52, 52, 52, 0.4);
  margin: 1rem 0;
  padding: 0 10px;
`;

const FooterSpan = styled.span`
  font-family: "Pretendard";
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.05em;
  color: #4a4a4a;
  margin: 1rem 0;
`;

const FooterBottom = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: end;
`;
