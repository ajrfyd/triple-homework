import React from "react";
import styled from "styled-components";
import data from "../../utils/data";

const TopSection = () => {
  
  return (
    <Container>
      {
        data.left.map(item => (
          <TextContainer key={item.id}>
            <strong>
              <span>
                {item.amount}
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
  width: 417px;
  color: #3A3A3A;
  /* border: 1px solid red; */
`

const TextContainer = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  padding: 3px 0 4px 0;
  line-height: 25px;
`