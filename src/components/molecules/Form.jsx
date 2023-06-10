import styled from "@emotion/styled";
import React, { useState } from "react";
import Input from "../atoms/Input";
import ButtonWrapper from "./ButtonWrapper";
import Tooltip from "../atoms/Tooltip";
import Title from "../atoms/Title";
import { useLocation, useNavigate } from "react-router-dom";

const Form = ({ inputProps, buttonProps }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const validateEmail = () => {
    if (email.indexOf("@") < 0 && email.length > 0) {
      return "@가 포함되어야합니다.";
    }
    return null; // 유효성 검사 통과
  };

  const validatePassword = () => {
    if (password.length < 8 && password.length > 0) {
      return "비밀번호는 8자리 이상이어야합니다.";
    }
    return null; // 유효성 검사 통과
  };

  const emailError = validateEmail();
  const passwordError = validatePassword();
  const location = useLocation();

  console.log(location.pathname.slice(1));

  return (
    <Base>
      <Title text={location.pathname.slice(1) === "signin" ? "로그인" : "회원가입"} size="large" />
      {inputProps.map((input) => {
        return (
          <InputWrapper>
            <Input
              value={input.type === "email" ? email : password}
              onChange={input.type === "email" ? handleEmailChange : handlePasswordChange}
              type={input.type}
              placeholder={input.placeholder}
              dataTestId={input.dataTestId}
            />
            <Tooltip text={input.type === "email" ? emailError : passwordError} />
          </InputWrapper>
        );
      })}
      <ButtonWrapper button={buttonProps} disable={emailError || passwordError || email.length < 1 || password.length < 1} />
    </Base>
  );
};

const Base = styled.div`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const InputWrapper = styled.div`
  position: relative;
`;

export default Form;
