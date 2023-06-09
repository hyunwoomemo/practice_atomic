import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Button = ({ text = "button", size = "small", color = "#01a9fe", path = undefined, disable }) => {
  const navigate = useNavigate();
  const handleClick = (text) => {
    console.log(text);
    if (text === "Back") {
      navigate(-1);
    } else if (text !== "Submit") {
      navigate(`${path}`);
    }
  };

  return (
    <Base size={size} color={color} disabled={disable && text !== "Back"} onClick={() => handleClick(text)}>
      {text}
    </Base>
  );
};

const Base = styled.button`
  background-color: ${({ color }) => (color ? color : "#01a9fe")};
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;

  &:disabled {
    background-color: gray;

    &:hover {
      background-color: #6b6b6b;
    }
  }

  &:hover {
    background-color: #2f5fef;
  }

  ${({ size }) =>
    size === "large"
      ? css`
          padding: 15px 25px;
          border-radius: 12px;
        `
      : size === "medium"
      ? css`
          padding: 10px 16px;
          border-radius: 7px;
        `
      : css`
          padding: 5px 10px;
          border-radius: 3px;
        `}

  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default Button;
