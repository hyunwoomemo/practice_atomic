import React from "react";
import useHomeContext from "../../hooks/context/useHomeContext";
import styled from "@emotion/styled";
import Button from "../atoms/Button";

const HomeButton = ({ children, event }) => {
  useHomeContext();
  return <Button event={event}>{children}</Button>;
};

const StyledButton = styled.button`
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #2f5fef;
  }
`;

export default HomeButton;
