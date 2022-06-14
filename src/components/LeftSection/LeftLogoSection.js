import React from "react";
import styled, { keyframes, css } from 'styled-components';
import logoSrc from '../../assets/triple2x.png';


const LeftLogoSection = () => {


  return (
    <Container>
      2021년 12월 기준
    </Container>
  )
}

export default LeftLogoSection;


const Container = styled.div`
  // Box
  width: 400px;
  height: 338px;
  /* border: 1px solid red; */

  // Background Img
  background-image: url(${logoSrc});
  background-position: 50% 50%;
  background-size: 330px;
  background-repeat: no-repeat;
  align-self: center;
  padding: 280px 0 0 0;

  // Font
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: var(--color-light);
  font-family: var(--font-normal);
  text-decoration: none solid var(--color-light);
  word-spacing: 0;

  // Animation
  animation-name: ${({theme}) => theme.fadeInUp};
  animation-delay: 100ms;
  ${({theme}) => theme.commonFadeInProps};
`