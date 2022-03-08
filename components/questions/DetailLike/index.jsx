import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { API_URL } from "../../config/index";
import LikeDetail from "../../public/static/images/LikeDetail";
import LinkDetail from "../../public/static/images/LinkDetail";
import { alertService } from "../alert.service";
import * from './style';

function DetailLike({ token, id, handleLinkAlarm }) {
  const router = useRouter();
  const [like, setLike] = useState([]);
  const [isClick, setIsClick] = useState(false);

  const url = typeof window !== "undefined" && window.location.origin ? window.location.href : "";

  const handleLike = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .put(`${API_URL}/questions/${id}/like_create/`)
        .then((response) => {
          setLike(response.data.helped_num);
        })
        .catch((e) => {
          if (e.response.status === 403) {
            alertService.warn("다른 유저의 글에 눌러주세요💛");
          } else if (e.response.status === 401) {
            alertService.warn("로그인 후 이용해주세요.");
          }
        });
    } catch (e) {
      alertService.warn("로그인 후 이용해주세요.");
    }
  };

  const handleData = () => {
    try {
      axios.get(`${API_URL}/questions/${id}/detail/`).then((res) => {
        setLike(res.data.helped_num);
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <Container>
      <ElementContainer>
        <FlexContainer>
          <Element onClick={() => handleLike(id)}>
            <LikeDetail />
          </Element>
          {like}
        </FlexContainer>
        <FlexContainer>
          <CopyToClipboard text={url}>
            <Element onClick={() => handleLinkAlarm()}>
              <LinkDetail />
            </Element>
          </CopyToClipboard>
          <span>LINK</span>
        </FlexContainer>
      </ElementContainer>
    </Container>
  );
}

export default DetailLike;
