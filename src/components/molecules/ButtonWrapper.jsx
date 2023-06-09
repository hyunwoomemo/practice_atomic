import styled from "@emotion/styled";
import React from "react";
import Button from "../atoms/Button";

const ButtonWrapper = ({ button, disable }) => {
  return (
    <Base>
      {button.map((button) => {
        return <Button text={button.text} path={button.path} size="medium" disable={disable} />;
      })}
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  gap: 1rem;
`;

export default ButtonWrapper;
