import React, { useContext } from "react";
import { TodoContext } from "../../components/Todo";

const useTodoContext = () => {
  const context = useContext(TodoContext);

  if (!context) throw new Error("Todo 컴포넌트 내부에서만 렌더링 될 수 있습니다!");
  return context;
};

export default useTodoContext;
