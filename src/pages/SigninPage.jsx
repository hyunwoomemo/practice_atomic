import styled from "@emotion/styled";
import React from "react";
import Signin from "../components/Signin";
import { useNavigate } from "react-router-dom";
import useSigninContext from "../hooks/context/useSigninContext";

const SigninPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  const handleSubmit = () => {};

  return (
    <Signin>
      <Signin.Heading>로그인</Signin.Heading>
      <Signin.Form></Signin.Form>
      <ButtonWrapper>
        <Signin.Button event={handleBack}>Back</Signin.Button>
        <Signin.Button>Submit</Signin.Button>
      </ButtonWrapper>
    </Signin>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default SigninPage;
