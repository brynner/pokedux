import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.div`
  margin-bottom: 20px;
  padding: 4px 8px;
  background-color: #000000;
  color: #cccccc;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #333333;
  }
`;

function Button(props: {
  onClick?: any,
  children: any
}) {

  return (
    <StyledButton onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );

}

export default Button;