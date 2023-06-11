import styled from "@emotion/styled";
import React, { useEffect } from "react";
import Home from "../components/Home";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleSigninBtn = () => {
    token ? navigate("/todo") : navigate("/signin");
  };

  const handleSignupBtn = () => {
    token ? navigate("/todo") : navigate("/signup");
  };

  return (
    <Home>
      <Home.Heading>원티드 프리온보딩</Home.Heading>
      <ButtonWrapper>
        <Home.Button event={handleSigninBtn}>Sign in</Home.Button>
        <Home.Button event={handleSignupBtn}>Sign up</Home.Button>
      </ButtonWrapper>
    </Home>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export default HomePage;
