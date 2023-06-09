import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Tooltip = ({ text }) => {
  return <Base text={text}>{text}</Base>;
};

const Base = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  transition: opacity 0.3s;
  opacity: 0;
  ${({ text }) =>
    text
      ? css`
          padding: 5px;
          opacity: 1;
        `
      : undefined}
  background-color: #e9e7a9;
  border-radius: 5px;
  font-size: 10px;
  white-space: nowrap;
`;

export default Tooltip;
