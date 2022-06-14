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
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 4rem 0;
`