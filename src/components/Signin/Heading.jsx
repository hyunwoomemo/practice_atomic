import React from "react";
import useSigninContext from "../../hooks/context/useSigninContext";

const Heading = ({ children }) => {
  useSigninContext();
  return <div>{children}</div>;
};

export default Heading;
