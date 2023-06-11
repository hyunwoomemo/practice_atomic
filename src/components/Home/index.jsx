import React, { createContext } from "react";
import Heading from "./Heading";
import styled from "@emotion/styled";
import HomeButton from "./HomeButton";

export const HomeContext = createContext();

const Home = ({ children }) => {
  return (
    <HomeContext.Provider value={{}}>
      <Base>{children}</Base>
    </HomeContext.Provider>
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

Home.Heading = Heading;
Home.Button = HomeButton;

export default Home;
