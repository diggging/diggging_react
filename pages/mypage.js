import cookie from "cookie";
import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";

import NavBar from "../components/common/NavBar";
import Layout from "../hocs/Layout";

function MyPage() {
  const router = useRouter();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  if (typeof window !== "undefined" && !loading && !isAuthenticated) {
    router.push("/login");
  }

  return (
    <Layout
      title="Diggging, 개발자를 위한 커뮤니티 | 내 디렉토리"
      content="개발 기록과 질문을 모아놓은 내 디렉토리"
    >
      <NavBar />
      <h2>{user !== null && user.username}님의 모래상자</h2>
    </Layout>
  );
}

export default MyPage;
