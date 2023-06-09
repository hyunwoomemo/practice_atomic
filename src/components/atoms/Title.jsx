import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const Title = ({ text, size }) => {
  return <Base size={size}>{text}</Base>;
};

const Base = styled.div`
  ${({ size }) =>
    size === "large"
      ? css`
          font-size: 24px;
          font-weight: bold;
        `
      : size === "medium"
      ? css``
      : css``}
`;

export default Title;
