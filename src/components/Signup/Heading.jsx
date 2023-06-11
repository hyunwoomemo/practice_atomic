import React from "react";
import useSignupContext from "../../hooks/context/useSignupContext";

const Heading = ({ children }) => {
  useSignupContext();
  return <div>{children}</div>;
};

export default Heading;
