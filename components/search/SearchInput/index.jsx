import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "../../../config";
import CloseIcon from "../../../public/static/images/CloseIcon";
import SearchIcon from "../../../public/static/images/Search";
import {
  removeSearchLoading,
  resetSearchData,
  setSearchLoading,
} from "../../../redux/actions/search";
import { SearchInputBox, StyledSearchInput } from "./style";

//todo(1) : loading, Nodata => useState에서 reducer로 UI연결
//todo(2) : searchKeyword redux state로 저장되게 dispatch하기

function SearchInput({ setSearchData, setNoData, searchData, page, setCount, setPage }) {
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();
  const { searchKeyword, loading, noResultContent } = useSelector((state) => state.search);
  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };
  const trimmedInput = searchInput.trim();

  const getSearchData = useCallback(
    async (page) => {
      setCount(0); //pagination에 필요한 상태도 redux로 관리해야할까?
      dispatch(setSearchLoading());
      setSearchData([]);
      // dispatch(resetSearchData());
      var apiRes;
      let newData = [];

      console.log(loading);
      //전체검색
      if (trimmedInput == "" || trimmedInput == "#" || trimmedInput == "/" || trimmedInput == "?") {
        apiRes = await axios.get(`${API_URL}/posts/search_quest/`);
        dispatch(removeSearchLoading());
        if (apiRes.status == 200) {
          newData = [...apiRes.data.results];
          setCount(apiRes.data.count);
        }
      } else {
        apiRes = await axios.get(
          `${API_URL}/posts/search_quest_result/${trimmedInput}?page=${page}`,
        );
        dispatch(removeSearchLoading());
        if (apiRes.status == 200) {
          newData = [...apiRes.data.results];
          setCount(apiRes.data.count);
        }
      }
      await setSearchData(newData);

      return newData;
    },
    [setCount, setNoData, setSearchData, trimmedInput],
  );

  const onSubmitSearch = useCallback(
    async (e) => {
      console.log(loading);
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
