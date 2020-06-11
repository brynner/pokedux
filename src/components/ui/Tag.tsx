import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  margin: 5px;
  padding: 4px 8px;
  background-color: #ececec;
  display: inline;
  font-size: 14px;
  border-radius: 3px;
`;

function Tag(props: {
  children: any
}) {

  return (
    <StyledTag>
      {props.children}
    </StyledTag>
  );

}

export default Tag;