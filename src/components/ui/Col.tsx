import React from 'react';
import styled from 'styled-components';

const StyledCol = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 25%;
  background-color: red;
  padding: 10px 0px;
  width:300px;

  @media screen and (max-width: 992px) {
    flex: 33%;
    background-color: blue;
  }

  @media screen and (max-width: 600px) {
    flex: 50%;
    background-color: orange;
  }
`;

function Grid(props: {
  children: any,
  xs?: number,
  sm?: number,
  md?: number,
  lg?: number
}) {

  const mountColumns = () => {
    return(props.children);
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