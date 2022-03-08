import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

import { API_URL } from "../../../config";
import { alertService } from "../../alert.service";
import { FlexContainer, IsSelected, SelectedBtn, SelectedContainer } from "../Selected/style";

function Selected({ setIsOpen, id, token, questionId, isOpen }) {
  const router = useRouter();
  const ref = useRef();

  const selectAnswer = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios.put(`${API_URL}/questions/${id}/select_answer/`).then((response) => {
        setIsOpen(false);
        alertService.warn("채택되었습니다");
        setTimeout(() => {
          router.reload(`/questions/${questionId}`);
        }, 1000);
      });
    } catch (e) {
      alertService.warn("채택되지 않았습니다.");
    }
  };

  useEffect(() => {
    const checkClickOutSide = (e) => {
      if (isOpen === true && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", checkClickOutSide);

    return () => {
      document.addEventListener("click", checkClickOutSide);
    };
  }, [isOpen]);

  const notSelectAnswer = () => {
    setIsOpen(false);
  };

  return (
    <SelectedContainer ref={ref}>
      <IsSelected>채택하시겠습니까?</IsSelected>
      <FlexContainer>
        <SelectedBtn onClick={() => selectAnswer(id)}>예</SelectedBtn>
        <SelectedBtn onClick={() => notSelectAnswer()}>아니오</SelectedBtn>
      </FlexContainer>
    </SelectedContainer>
  );
}

export default React.memo(Selected);
