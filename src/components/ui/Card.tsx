import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  position: relative;
  background-color: #8BBE8A;
  margin: 15px;
  width: calc(100% - 30px);
  height: 115px;
  border-radius: 10px;
  cursor: pointer;

  background-image: url('/bg-pokeball.png');
  background-repeat: no-repeat;
  background-position: right;

  -webkit-box-shadow: 0px 20px 28px -25px rgba(139,190,138,1);
  -moz-box-shadow: 0px 20px 28px -25px rgba(139,190,138,1);
  box-shadow: 0px 20px 28px -25px rgba(139,190,138,1);

  &::after {
    position: absolute;
    top: 6px;
    left: 50px;
    content: '';
    width: 74px;
    height: 32px;

    background-image: url('/bg-pattern.png');
    background-repeat: no-repeat;
    
  }
`;

const StyledTitle = styled.h2`
  position: absolute;
  top: 26px;
  left: 20px;
  width: 150px;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  text-transform: capitalize;
  color: #FFFFFF;
`;

const StyledAvatar = styled.div`
background-color: #000000;

img {
  position: absolute;
  top: -20px;
  right: 10px;
  width: 110px;
}
`;

function Card(props: {
  title?: string,
  picture?: string
}) {

  return (
    <StyledCard>
      <StyledTitle>{props.title}</StyledTitle>
      <StyledAvatar><img src={props.picture} alt={props.title} /></StyledAvatar>
    </StyledCard>
  );

}

export default Card;