import React from "react";
import Button from "../atoms/Button";
import useSignupContext from "../../hooks/context/useSignupContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupButton = ({ children, event }) => {
  const { email, password } = useSignupContext();

  const disabled = () => {
    return children !== "Back" && (!email || !password) ? true : false;
  };

  const url = "http://localhost:3001";
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      console.log("회원가입");
      await axios.post(`${url}/auth/signup`, { email, password });
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button disabled={disabled()} event={children === "Back" ? event : handleSubmit}>
      {children}
    </Button>
  );
};

export default SignupButton;
