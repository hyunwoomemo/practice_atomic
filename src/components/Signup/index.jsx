import styled from "@emotion/styled";
import React, { createContext, useState } from "react";
import Heading from "./Heading";
import Form from "./Form";
import SignupButton from "./SignupButton";

export const SignupContext = createContext();

const Signup = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const providerValue = {
    email,
    setEmail,
    password,
    setPassword,
  };
  return (
    <SignupContext.Provider value={{ ...providerValue }}>
      <Base>{children}</Base>
    </SignupContext.Provider>
  );
};

Signup.Heading = Heading;
Signup.Form = Form;
Signup.Button = SignupButton;

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

export default Signup;
