import styled from "@emotion/styled";
import React from "react";

const Input = ({ placeholder, dataTestId, type, value, onChange }) => {
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);
  };

  return <Base value={value} onChange={handleInputChange} type={type} placeholder={placeholder} data-testid={dataTestId}></Base>;
};

const Base = styled.input`
  border: 0;
  padding: 10px;
  outline: none;
`;

export default Input;
