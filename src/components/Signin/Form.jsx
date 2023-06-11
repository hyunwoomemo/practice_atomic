import React from "react";
import useSigninContext from "../../hooks/context/useSigninContext";
import styled from "@emotion/styled";
import Input from "../atoms/Input";
import CheckIcon from "../atoms/CheckIcon";

const Form = () => {
  const { email, password, setEmail, setPassword } = useSigninContext();

  const validateEmail = () => {
    return email.indexOf("@") > -1 ? true : false;
  };

  const validatePassword = () => {
    return password.length > 7 ? true : false;
  };

  return (
    <Base>
      <InputWrapper>
        <Input type="email" placeholder="email" event={setEmail} />
        <CheckIcon active={validateEmail()} />
        <Text>{email.indexOf("@") < 0 && email.length > 0 ? "@가 포함되어야합니다." : undefined}</Text>
      </InputWrapper>
      <InputWrapper>
        <Input type="password" placeholder="password" event={setPassword} />
        <CheckIcon active={validatePassword()} />
        <Text>{password.length < 8 && password.length > 0 ? "8자리 이상이어야합니다." : undefined}</Text>
      </InputWrapper>
    </Base>
  );
};

const Base = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
`;

const Text = styled.div`
  font-size: 10px;
  position: absolute;
  top: 105%;
`;

export default Form;
