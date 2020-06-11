import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-bottom: 40px;
`;

function Container(props: {
  children: any
}) {

  return (
    <StyledContainer>
      {props.children}
    </StyledContainer>
  );

}

export default Container;