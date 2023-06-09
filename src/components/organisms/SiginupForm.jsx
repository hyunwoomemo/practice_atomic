import React from "react";
import Form from "../molecules/Form";
import styled from "@emotion/styled";

const inputProps = [
  {
    type: "email",
    placeholder: "email",
    dataTestId: "email-input",
  },
  { type: "password", placeholder: "password", dataTestId: "password-input" },
];

const buttonProps = [
  {
    text: "Back",
    path: "/",
  },
  {
    text: "Submit",
    dataTestId: "signup-button",
  },
];

const SiginupForm = () => {
  return (
    <Base>
      <Form inputProps={inputProps} buttonProps={buttonProps} />
    </Base>
  );
};

const Base = styled.div``;

export default SiginupForm;
