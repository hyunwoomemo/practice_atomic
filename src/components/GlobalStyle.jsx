import { Global, css } from "@emotion/react";
import React from "react";

const GlobalStyle = () => {
  const defaultStyle = css`
    html,
    body {
      margin: 0;
    }
  `;
  return <Global styles={defaultStyle}></Global>;
};

export default GlobalStyle;
