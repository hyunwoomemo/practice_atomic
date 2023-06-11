import React from "react";
import useTodoContext from "../../hooks/context/useTodoContext";

const TodoItem = ({ children }) => {
  useTodoContext();
  return (
    <li>
      <label>
        <input type="checkbox" />
        <span>{children}</span>
      </label>
    </li>
  );
};

export default TodoItem;
