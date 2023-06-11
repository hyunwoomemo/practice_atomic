import React from "react";
import useSigninContext from "../../hooks/context/useSigninContext";
import Button from "../atoms/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SigninButton = ({ event, children }) => {
  const { email, password } = useSigninContext();

  const disabled = () => {
    return children !== "Back" && (!email || !password) ? true : false;
  };

  const url = "http://localhost:3001";
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      // 로그인 API 호출
      const response = await axios.post(`${url}/auth/signin`, { email, password });

      if (response.status === 200) {
        const { token } = response.data;
        // JWT를 로컬 스토리지에 저장
        localStorage.setItem("token", token);
        // 로그인 성공 시 /todo 경로로 이동
        navigate("/todo");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button disabled={disabled()} event={children === "Back" ? event : handleSubmit}>
      {children}
    </Button>
  );
};

export default SigninButton;
