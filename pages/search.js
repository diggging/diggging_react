import React, { useState } from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

import NavBar from "../components/common/NavBar";
import CardContainer from "../components/search/CardContainer";
import NoResultMessage from "../components/search/NoResultMessage";
import SearchInput from "../components/search/SearchInput";
import SearchTab from "../components/search/SearchTab";
import Layout from "../hocs/Layout";
function Search() {
  const [searchData, setSearchData] = useState([]);
  const [noData, setNoData] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Layout
        title="개발자를 위한 커뮤니티, Diggging | 검색"
        content="디깅에서 다양한 질문들을 검색해보세요"
      >
        <NavBar />
        <SearchInput
          setLoading={setLoading}
          setSearchData={setSearchData}
          setNoData={setNoData}
          searchData={searchData}
        />
        <SearchTab />
        {loading && (
          <LoaderWrapper>
            <Loader type="Puff" color="#FFE59C" width={100} height={100} />
          </LoaderWrapper>
        )}
        {noData ? <NoResultMessage /> : <CardContainer searchData={searchData} />}
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
