import styled from "@emotion/styled";
import React from "react";

const Input = (props) => {
  return <Base onChange={(e) => props.event(e.target.value)} type={props.type} placeholder={props.placeholder} />;
};

const Base = styled.input``;

export default Input;
