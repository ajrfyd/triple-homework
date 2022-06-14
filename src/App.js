import React from 'react';
import styled from 'styled-components';
import LeftLogoSection from './components/LeftSection/LeftLogoSection';
import RightAwardSection from './components/RightSection/RightAwardSection';

const App = () => {
  return (
    <Container>
      <SectionContainer>
        <LeftLogoSection />
        <RightAwardSection />
      </SectionContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #eee;
  `

const SectionContainer = styled.div`
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  width: 100%;
  height: 512px;
  /* border: 5px solid red; */
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;
`