import React from "react";
import styled from 'styled-components';
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";

const RightAwardSection = () => {

  return (
    <Container>
      <TopSection />
      <BottomSection />
    </Container>
  )
}

export default RightAwardSection;

const Container = styled.div`
  // Box
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 4rem 0;

  // media
  @media (max-width: 1140px) {
    padding: 0%;
    margin-top: 1rem;
  }
`