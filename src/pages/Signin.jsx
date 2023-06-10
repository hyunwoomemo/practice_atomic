import styled from "@emotion/styled";
import React from "react";
import SigninForm from "../components/organisms/SigninForm";
import Title from "../components/atoms/Title";

const Signin = () => {
  return (
    <Base>
      <SigninForm />
    </Base>
  );
};

const Base = styled.div``;

export default Signin;
