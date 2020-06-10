import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  background-color: #ececec;
  width: 100%;
  height: 100px;
`;

const StyledTitle = styled.h2`
  font-weight: normal;
  color: #777777;
`;

function Card(props: {
  title: string
}) {

  return (
    <div>
      <StyledCard>
        <StyledTitle>{props.title}</StyledTitle>
      </StyledCard>
    </div>
  );

}

export default Card;