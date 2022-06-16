import React from "react";
import styled from "styled-components";

const Button = ({ children, clickEvent }) => {

  return (
    <RefreshButton onClick={clickEvent}>
      {children}
    </RefreshButton>
  )
}

export default Button;

const RefreshButton = styled.button`
  position: absolute;
  border: none;
  padding: .5rem 1rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  box-shadow: 0 0 10px rgba(0, 0, 0, .2);
  color: #3772FD;
  background-color: #fff;
  font-weight: bold;
  top: 90%;
  left: 50%;
  transform: translate(-50%);

  &:hover {
    transform: translate(-50%) scale(1.1);
  }

  &:active {
    transform: translate(-50%) scale(0.95);
    color: red;
  }
`