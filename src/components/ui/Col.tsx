import React from 'react';
import styled from 'styled-components';

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 25%;
  width:300px;

  @media screen and (max-width: 992px) {
    flex: 33%;
  }

  @media screen and (max-width: 600px) {
    flex: 50%;
  }
`;

function Grid(props: {
  children: any
}) {

  const mountColumns = () => {
    return props.children;
  }

  return (
    <div>
      <StyledCol>
        {mountColumns()}
      </StyledCol>
    </div>
  );

}

export default Grid;