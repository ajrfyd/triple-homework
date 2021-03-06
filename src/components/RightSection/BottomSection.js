import React from "react";
import styled, { css } from "styled-components";
import data from "../../utils/data";

const BottomSection = () => {
  const { right } = data;


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

  @media (max-width: 1140px) {
    width: 300px;
    height: 47px;
  }
`


const StoreContainer = styled.div`
  // Background  
  ${({ src }) => src && css`
    background-image: url(${src});
    background-position: 0% 0%;
    background-repeat: no-repeat;
    background-size: 45px 45px;
  `}

  // Box
  flex: 1;
  height: 54px;
  padding-left: 3.5rem;

  // Font
  font-weight: 700;
  font-size: 14px;
  color: var(--color-light);

  // Animation
  animation-name: ${({theme}) => theme.fadeInUp};
  ${ ({theme}) => theme.commonFadeInProps};
  animation-delay: 400ms;

  // media
  @media (max-width: 1140px) {
    font-size: 10px;
    background-size: 35px 35px;
    line-height: 15px;
    padding-left: 2.5rem;
  }
`
