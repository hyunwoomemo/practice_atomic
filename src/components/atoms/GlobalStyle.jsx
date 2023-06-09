import { Global, css } from "@emotion/react";
import React from "react";

const defaultStyle = css`
  body {
    margin: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={defaultStyle} />;
};

export default GlobalStyle;
