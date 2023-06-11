import React from "react";
import useHomeContext from "../../hooks/context/useHomeContext";

const Heading = ({ children }) => {
  useHomeContext();
  return <div>{children}</div>;
};

export default Heading;
