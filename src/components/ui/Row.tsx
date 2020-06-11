import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
`;

function Row(props: {
  children: any
}) {

  return (
    <StyledRow>
      {props.children}
    </StyledRow>
  );

}

export default Row;