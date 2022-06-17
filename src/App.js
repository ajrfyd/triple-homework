import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import LeftLogoSection from './components/LeftSection/LeftLogoSection';
import RightAwardSection from './components/RightSection/RightAwardSection';
import theme from './style/style';
import Button from './components/Button/Button';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button clickEvent={() => window.location.replace('/')}>Refresh</Button>
      <Container>
        <SectionContainer>
          <LeftLogoSection />
          <RightAwardSection />
        </SectionContainer>
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  // Box  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  //Background
  background-color: #eee;
  `

const SectionContainer = styled.div`
  // Box
  box-shadow: 0 0 2px rgba(0, 0, 0, .2);
  width: 100%;
  height: 512px;
  /* border: 5px solid red; */
  display: flex;
  justify-content: space-evenly;
  background-color: #fff;


  // media
  @media (max-width: 1140px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`