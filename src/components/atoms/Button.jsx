import styled from "@emotion/styled";
import React from "react";

const Button = ({ children, event, disabled }) => {
  return (
    <StyledButton disabled={disabled} onClick={event}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  transition: all 0.3s;
  cursor: pointer;
  background-color: #01a9fe;
  color: #fff;
  border: 0;
  padding: 7px 10px;
  border-radius: 5px;

  &:disabled {
    background-color: gray;

    &:hover {
      background-color: #6f6f6f;
    }
  }

  &:hover {
    background-color: #2f5fef;
  }
`;

export default Button;
