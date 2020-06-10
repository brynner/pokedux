import React from 'react';
import styled from 'styled-components';

const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  background-color: yellow;
  justify-content: center;
`;

function Row(props: {
  children: any
}) {

  return (
    <div>
      <StyledRow>
        {props.children}
      </StyledRow>
    </div>
  );

}

export default Row;