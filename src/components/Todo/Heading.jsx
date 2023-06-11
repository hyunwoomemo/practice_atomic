import React from "react";
import useTodoContext from "../../hooks/context/useTodoContext";
import styled from "@emotion/styled";

const Heading = ({ children }) => {
  useTodoContext();
  return <Base>{children}</Base>;
};

const Base = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

export default Heading;
