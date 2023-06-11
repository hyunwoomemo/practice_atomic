import React, { useContext } from "react";
import { SigninContext } from "../../components/Signin";

const useSigninContext = () => {
  const context = useContext(SigninContext);

  if (!context) throw new Error("Signin 컴포넌트 내부에서만 렌더링 될 수 있습니다!");
  return context;
};

export default useSigninContext;
