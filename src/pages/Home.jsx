import styled from "@emotion/styled";
import React from "react";
import Title from "../components/atoms/Title";
import ButtonWrapper from "../components/molecules/ButtonWrapper";

const button = [
  {
    text: "Signin",
    path: "/signin",
  },
  {
    text: "Signup",
    path: "/signup",
  },
];

const Home = () => {
  return (
    <Base>
      <Title text="원티드 프리온보딩 프론트엔드" size="large" />
      <ButtonWrapper button={button} />
    </Base>
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

export default Home;
