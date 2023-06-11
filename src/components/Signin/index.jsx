import styled from "@emotion/styled";
import React, { createContext, useState } from "react";
import Heading from "./Heading";
import SigninButton from "./SigninButton";
import Form from "./Form";

export const SigninContext = createContext();

const Signin = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const providerValue = {
    email,
    setEmail,
    password,
    setPassword,
  };

  return (
    <SigninContext.Provider value={{ ...providerValue }}>
      <Base>{children}</Base>
    </SigninContext.Provider>
  );
};

const Base = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  gap: 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
`;

Signin.Heading = Heading;
Signin.Button = SigninButton;
Signin.Form = Form;

export default Signin;
