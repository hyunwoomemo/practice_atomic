import React from "react";
import useTodoContext from "../../hooks/context/useTodoContext";

const Button = ({ children }) => {
  useTodoContext();
  return <button>{children}</button>;
};

export default Button;
