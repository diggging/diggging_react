import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";

import { API_URL } from "../../../config";
import CloseIcon from "../../../public/static/images/CloseIcon";
import SearchIcon from "../../../public/static/images/Search";
import { SearchInputBox, StyledSearchInput } from "./style";

function SearchInput({
  setSearchData,
  setNoData,
  searchData,
  setLoading,
  page,
  setCount,
  setPage,
}) {
  const [searchInput, setSearchInput] = useState("");

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const trimmedInput = searchInput.trim();

  const getSearchData = useCallback(
    async (page) => {
      setCount(0);
      setLoading(true);
      setNoData(false);
      setSearchData([]);
      var apiRes;
      let newData = [];

      if (trimmedInput == "" || trimmedInput == "#" || trimmedInput == "/" || trimmedInput == "?") {
        // apiRes = await axios.get(`${API_URL}/posts/search_quest?page=${page}`);
        apiRes = await axios.get(`${API_URL}/posts/search_quest/`);
        setLoading(false);
        if (apiRes.status == 200) {
          newData = [...apiRes.data.results];
          setCount(apiRes.data.count);
        }
      } else {
        apiRes = await axios.get(
          `${API_URL}/posts/search_quest_result/${trimmedInput}?page=${page}`,
        );
        setLoading(false);
        if (apiRes.status == 200) {
          newData = [...apiRes.data.results];
          setCount(apiRes.data.count);
        }
      }
      await setSearchData(newData);
      // console.log(apiRes);

      return newData;
    },
    [setCount, setLoading, setNoData, setSearchData, trimmedInput],
  );

  const onSubmitSearch = useCallback(
    async (e) => {
      setPage(1);
      e.preventDefault();

      //get해오는api연결
      axios.defaults.headers.common["Authorization"] = "";
      try {
        const newData = await getSearchData(page);

        await setSearchData(newData); //searchData로 담아주기
        if (newData.length == 0) {
          //검색결과가 없을 때
          setNoData(true); //noResult 컴포넌트 뜰 수 있도록
        } else {
          setNoData(false);
        }

        return { searchData };
      } catch (err) {
        return { err };
      }
    },
    [getSearchData, page, searchData, setNoData, setSearchData],
  );

  const onClickReset = () => {
    setSearchInput("");
  };
  //첫 마운트시에 데이터 받아오지 않도록
  const mounted = useRef(false);

  //선택한 page가 바뀔때마다 데이터 받아온다.
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      getSearchData(page);
    }
  }, [page]);

  return (
    <form onSubmit={(e) => onSubmitSearch(e)}>
      <SearchInputBox>
        <SearchIcon width="1.75rem" height="1.625rem" />
        <StyledSearchInput
          type="text"
          placeholder="무엇을 찾고 있나요?"
          value={searchInput}
          onChange={(e) => onInputChange(e)}
        />
        {searchInput && <CloseIcon onClick={onClickReset} cursor="pointer" />}
      </SearchInputBox>
    </form>
  );
}
export default SearchInput;
