import React from "react";

import ListCard from "../../search/ListCard";
import { StyledCardContainer } from "./style";

//데이터바인딩
function CardContainer({ searchData }) {
  return (
    <StyledCardContainer>
      {searchData.map((data) => (
        <ListCard key={data.id} data={data} />
      ))}
    </StyledCardContainer>
  );
}

export default CardContainer;
