import React, { useState } from "react";
import useTodoContext from "../../hooks/context/useTodoContext";
import axios from "axios";

const CreateTodo = () => {
  const { todos, setTodos } = useTodoContext();

  const [todo, setTodo] = useState("");
  const url = "http://localhost:3001";

  const handleSubmit = async (e, length) => {
    console.log(length);
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/todos`, { todo, length });
      const todos = response.data;
      setTodos(todos);
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, todos.length)}>
      <input data-testid="new-todo-input" value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button data-testid="new-todo-add-button">추가</button>
    </form>
  );
};

export default CreateTodo;
