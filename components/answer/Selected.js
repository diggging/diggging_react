import React, {useRef, useEffect} from 'react';
import axios from "axios";
import styled from 'styled-components';
import { API_URL } from '../../config';
import { useRouter } from "next/router";
import { alertService } from '../alert.service';

function Selected({setIsOpen, id, token, questionId, isOpen}) {
  const router = useRouter();
  const ref = useRef();


  const selectAnswer = async (id) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios.defaults.headers.common["Content-Type"] = "application/json";
      await axios
        .put(`${API_URL}/questions/${id}/select_answer/`)
        .then((response) => {
          setIsOpen(false);
          alertService.warn('채택되었습니다')
          setTimeout(() => { router.reload(`/questions/${questionId}`); }, 1000)
        });
    } catch (e) {
      alertService.warn("채택되지 않았습니다.")
    }
  };

  useEffect(() => {
    const checkClickOutSide = (e) => {
      if(isOpen === true && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", checkClickOutSide)
    return () => {
      document.addEventListener("click", checkClickOutSide)
    }
  },[isOpen])

  const notSelectAnswer = () => {
    setIsOpen(false);
  }

    return (
        <SelectedContainer ref={ref}r>
          <IsSelected>
            채택하시겠습니까?
          </IsSelected>
          <FlexContainer>
            <SeletedBtn onClick={() => selectAnswer(id)}>예</SeletedBtn>
            <SeletedBtn onClick={() => notSelectAnswer()}>아니오</SeletedBtn>
          </FlexContainer>
        </SelectedContainer>
    );
}

export default React.memo(Selected);

const SelectedContainer = styled.div`
  position: absolute;
  width: 12.5rem;
  height: 5rem;
  background: #FFFFFF;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  top: -5.9375rem;
  right: 1rem;
  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const IsSelected = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #343434;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SeletedBtn = styled.button`
  width: 100px;
  height: 39px;
  background: #ffffff;
  
  &:hover {
    background: rgba(196, 196, 196, 0.15);
  }
`;