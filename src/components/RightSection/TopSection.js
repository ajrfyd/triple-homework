import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import styled from "styled-components";
import data from "../../utils/data";
import CountUp from "../CountUp/CountUp";

const TopSection = () => {
  
  return (
    <Container>
      {
        data.left.map(item => (
          <TextContainer key={item.id}>
            <strong>
              <span>
                <CountUp start={0} end={item.amount} time={2000}/>
              </span>
              {item.text1}
            </strong>
            {item.text2}
          </TextContainer>
        ))
      }
    </Container>
  )
}

export default TopSection;

const Container = styled.section`
  // Box
  width: 417px;
  color: #3A3A3A;

  // Animation
  animation-name: ${({theme}) => theme.fadeInUp};
  animation-delay: 200ms;
  ${({theme}) => theme.commonFadeInProps};
`

const TextContainer = styled.div`
  //Box
  margin-bottom: 20px;
  padding: 3px 0 4px 0;

  // Font
  font-size: 2rem;
  line-height: 25px;
`