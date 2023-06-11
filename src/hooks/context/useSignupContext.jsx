import React, { useContext } from "react";
import { SignupContext } from "../../components/Signup";

const useSignupContext = () => {
  const context = useContext(SignupContext);

  if (!context) throw new Error("Signup 컴포넌트 내부에서만 렌더링 될 수 있습니다!");

  return context;
};

export default useSignupContext;
