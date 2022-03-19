import axios from "axios";
import React, { useState } from "react";

import { API_URL } from "../../../config";
import CloseIcon from "../../../public/static/images/CloseIcon";
import SearchIcon from "../../../public/static/images/Search";
import { SearchInputBox, StyledSearchInput } from "./style";

function SearchInput({ setSearchData, setNoData, searchData, setLoading }) {
  const [searchInput, setSearchInput] = useState("");

  const onInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getSearchData = async () => {
    setLoading(true);
    setNoData(false);
    setSearchData([]);
    const trimmedInput = searchInput.trim();

    if (trimmedInput == "" || trimmedInput == "#" || trimmedInput == "/" || trimmedInput == "?") {
      const apiRes = await axios.get(`${API_URL}/posts/search_quest/`);

      setLoading(false);

      return apiRes;
    } else {
      const apiRes = await axios.get(`${API_URL}/posts/search_quest_result/${trimmedInput}`);

      setLoading(false);

      return apiRes;
    }
  };

  const onSubmitSearch = async (e) => {
    e.preventDefault();
    //get해오는api연결
    axios.defaults.headers.common["Authorization"] = "";
    try {
      const apiRes = await getSearchData();

      if (apiRes.status == 200) {
        const newData = [...apiRes.data];

        await setSearchData(newData); //searchData로 담아주기
        if (newData.length == 0) {
          //검색결과가 없을 때
          setNoData(true); //noResult 컴포넌트 뜰 수 있도록
        } else {
          setNoData(false);
        }

        return { searchData };
      }
    } catch (err) {
      return { err };
    }
  };

  const onClickReset = () => {
    setSearchInput("");
  };

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
