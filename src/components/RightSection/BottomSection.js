import React from "react";
import styled, { css } from "styled-components";
import googleStore from '../../assets/play-store2x.png';
import appleStore from '../../assets/badge-apple4x.png';
import data from "../../utils/data";

const BottomSection = () => {
  const { right } = data;
  console.log(right);

  return (
    <Container>
      {
        right.map(item => (
          <StoreContainer key={item.id} src={item.img}>
            {item.text1}<br/>
            {item.text2} 
          </StoreContainer>
        ))
      }
    </Container>
  )
}

export default BottomSection;

const Container = styled.div`
  width: 417px;
  display: flex;
`


const StoreContainer = styled.div`
  // background  
  ${({ src }) => src && css`
    background-image: url(${src});
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 45px 45px;
  `}

  flex: 1;
  align-self: right;
  /* border: 1px solid red; */
  height: 54px;
  /* margin: 2rem 0; */
  padding-left: 3.5rem;

  // font
  font-weight: 700;
  font-size: 14px;
  color: var(--color-light);
`
