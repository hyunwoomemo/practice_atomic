import styled from "@emotion/styled";
import React from "react";
import Signup from "../components/Signup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useSignupContext from "../hooks/context/useSignupContext";

const SignupPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Signup>
      <Signup.Heading>회원가입</Signup.Heading>
      <Signup.Form></Signup.Form>
      <ButtonWrapper>
        <Signup.Button event={handleBack}>Back</Signup.Button>
        <Signup.Button>Submit</Signup.Button>
      </ButtonWrapper>
    </Signup>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default SignupPage;
