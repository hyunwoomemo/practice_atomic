import React from "react";
import useTodoContext from "../../hooks/context/useTodoContext";
import axios from "axios";

const TodoItem = ({ children, completed, id, event }) => {
  const { todos, setTodos } = useTodoContext();

  const url = "http://localhost:3001";

  const handleCheckboxChange = async (todoId, isCompleted) => {
    try {
      const response = await axios.put(`${url}/todos/${todoId}`, { isCompleted });

      console.log(response);
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, isCompleted: response.data.isCompleted };
          }
          return todo;
        });
      });
      console.log(todos);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={(e) => handleCheckboxChange(id, e.target.checked)} />
        <span>{children}</span>
      </label>
      <button data-testid="modify-button">수정</button>
      <button data-testid="delete-button">삭제</button>
    </li>
  );
};

export default TodoItem;
