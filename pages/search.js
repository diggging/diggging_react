import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import styled from "styled-components";

import NavBar from "../components/common/NavBar";
import Paging from "../components/Paging";
import CardContainer from "../components/search/CardContainer";
import NoResultMessage from "../components/search/NoResultMessage";
import SearchInput from "../components/search/SearchInput";
import SearchTab from "../components/search/SearchTab";
import Layout from "../hocs/Layout";
function Search() {
  // redux state 가져오기
  const { loading, noResultContent, searchData } = useSelector((state) => state.search);
  //페이지네이션
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const pageCount = useSelector((state) => state.search.pageCount);

  return (
    <div>
      <Layout
        title="개발자를 위한 커뮤니티, Diggging | 검색"
        content="디깅에서 다양한 질문들을 검색해보세요"
      >
        <NavBar />
        <SearchInput page={page} setPage={setPage} />
        <SearchTab />
        {loading && (
          <LoaderWrapper>
            <Loader type="Puff" color="#FFE59C" width={100} height={100} />
          </LoaderWrapper>
        )}
        {noResultContent ? <NoResultMessage /> : <CardContainer searchData={searchData} />}
        <Paging handlePageChange={handlePageChange} page={page} count={pageCount} />
      </Layout>
    </div>
  );
}

export default Search;

const LoaderWrapper = styled.div`
  top: 50vh;
  background-color: #fafaff;
  text-align: center;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;
