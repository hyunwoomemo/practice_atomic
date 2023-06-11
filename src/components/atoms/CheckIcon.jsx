import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const CheckIcon = ({ active }) => {
  return (
    <Base active={active}>
      <AiOutlineCheckCircle />
    </Base>
  );
};

const Base = styled.div`
  position: absolute;
  left: 105%;
  font-size: 20px;
  transition: all 0.3s;
  ${({ active }) =>
    active
      ? css`
          color: #01a9fe;
        `
      : css`
          color: gray;
        `}
`;

export default CheckIcon;
