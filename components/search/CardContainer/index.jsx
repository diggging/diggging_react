import Link from "next/link";
import React from "react";

import ListCard from "../ListCard";
import { StyledCardContainer } from "./style";

//데이터바인딩
function CardContainer({ searchData }) {
  return (
    <StyledCardContainer>
      {searchData.map((data) => (
        <Link key={data.id} href={`/questions/${data.id}`} passHref>
          <ListCard data={data} />
        </Link>
      ))}
    </StyledCardContainer>
  );
}

export default CardContainer;
