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
      <Layout title="Diggging | 검색" content="개발자들을 위한 커뮤니티, 검색페이지">
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
