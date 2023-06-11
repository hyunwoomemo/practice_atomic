import React, { useEffect } from "react";
import useTodoContext from "../../hooks/context/useTodoContext";
import styled from "@emotion/styled";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const { todos, setTodos } = useTodoContext();
  const url = "http://localhost:3001";
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${url}/todos`);
        setTodos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTodos();
  }, []);

  return (
    <Base>
      {todos.map((v) => {
        return (
          <TodoItem key={v.id} id={v.id} completed={v.isCompleted}>
            {v.todo}
          </TodoItem>
        );
      })}
    </Base>
  );
};

const Base = styled.div``;

export default TodoList;
