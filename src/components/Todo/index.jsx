import React, { createContext, useState } from "react";
import Heading from "./Heading";
import styled from "@emotion/styled";
import CreateTodo from "./CreateTodo";
import TodoItem from "./TodoItem";
import TodoList from "./TodoList";
import Button from "./Button";

export const TodoContext = createContext();

const Todo = ({ children }) => {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <Base>{children}</Base>
    </TodoContext.Provider>
  );
};

Todo.Heading = Heading;
Todo.CreateTodo = CreateTodo;
Todo.TodoList = TodoList;
Todo.Button = Button;

const Base = styled.div`
  padding: 1rem;
`;

export default Todo;
