import styled from "@emotion/styled";
import React, { useState } from "react";
import Form from "../molecules/Form";

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
    dataTestId: "signin-button",
  },
];

const SigninForm = () => {
  return (
    <Base>
      <Form inputProps={inputProps} buttonProps={buttonProps} />
    </Base>
  );
};

const Base = styled.div``;

export default SigninForm;
