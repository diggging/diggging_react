import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Prevent from "../components/questions/PreventRerender";
import QuestionList from "../components/questions/QuestionList";
import { setMine } from "../modules/questions";
import { check_auth_status } from "../redux/actions/auth";

function Mine() {
  const dispatch = useDispatch();
  const { data, count, page, smallCriteria, loading, error, mineToken, bigCriteria } = useSelector(
    (state) => state.questions,
  );
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [token, setToken] = useState("");

  const getAccessToken = async () => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(check_auth_status())
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.access;

          setToken(accessToken);

          return accessToken;
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getAccessToken();
    dispatch(setMine(1, "all", token));
  }, [dispatch, token]);

  return (
    <Prevent>
      {token && isAuthenticated ? (
        <>
          <QuestionList data={data} page={page} count={count}></QuestionList>
        </>
      ) : (
        <LoaderContainer>
          <Loader type="Oval" color="#FFE59C" width={100} height={100} />
        </LoaderContainer>
      )}
    </Prevent>
  );
}

export default React.memo(Mine);

const LoaderContainer = styled.ul`
  height: 100%;
  border-radius: 0.125rem;
  margin-top: 24px;
  padding: 1.625rem 2.1875rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
