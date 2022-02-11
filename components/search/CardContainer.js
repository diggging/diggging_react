import Link from "next/link";
import React from "react";
import styled from "styled-components";

import ListCard from "./ListCard";

//데이터바인딩
function CardContainer({ searchData }) {
  return (
    <StyledCardContainer>
      {searchData.map((data) => (
        <Link key={data.id} href={`/questions/${data.id}`}>
          <a>
            <ListCard data={data} />
          </a>
        </Link>
      ))}
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.div`
  margin: 0 auto;
  max-width: 67rem;
`;

export default CardContainer;
