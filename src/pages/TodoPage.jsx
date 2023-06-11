import React, { useEffect, useState } from "react";
import Todo from "../components/Todo";
import axios from "axios";

const TodoPage = () => {
  const url = "http://localhost:3001";
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(`${url}/todos`);

        const todos = response.data;
        setTodos(todos);
        console.log(todos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  console.log(todos);

  return (
    <Todo>
      <Todo.Heading>ToDo List</Todo.Heading>
      <Todo.CreateTodo />
      <Todo.TodoList />
    </Todo>
  );
};

export default TodoPage;
