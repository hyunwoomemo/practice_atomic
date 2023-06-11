import React, { useState } from "react";
import useTodoContext from "../../hooks/context/useTodoContext";
import axios from "axios";

const TodoItem = ({ children, completed, id, event }) => {
  const { todos, setTodos, edit, setEdit } = useTodoContext();

  const url = "http://localhost:3001";

  const handleCheckboxChange = async (todoId, isCompleted) => {
    try {
      const response = await axios.put(`${url}/todos/done/${todoId}`, { isCompleted });
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === todoId) {
            return { ...todo, isCompleted: response.data.isCompleted };
          }
          return todo;
        });
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${url}/todos/${id}`, { id });
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };

  const [inputValue, setInputValue] = useState("");
  const handleEditChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleEditSubmit = async (id, inputValue) => {
    try {
      const response = await axios.put(`${url}/todos/edit/${id}`, { todo: inputValue });
      console.log(response.data);
      setTodos((prevTodos) => {
        return prevTodos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, todo: response.data.todo };
          }
          return todo;
        });
      });
      setEdit(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      {!edit ? (
        <>
          <label>
            <input type="checkbox" checked={completed} onChange={(e) => handleCheckboxChange(id, e.target.checked)} />
            <span>{children}</span>
          </label>
          <button data-testid="modify-button" onClick={handleEdit}>
            수정
          </button>
          <button data-testid="delete-button" onClick={handleDelete}>
            삭제
          </button>
        </>
      ) : (
        <>
          <label>
            <input type="checkbox" checked={completed} onChange={(e) => handleCheckboxChange(id, e.target.checked)} />
            <input data-testid="modify-input" defaultValue={children} onChange={handleEditChange} />
          </label>
          <button data-testid="submit-button" onClick={() => handleEditSubmit(id, inputValue)}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={() => setEdit(false)}>
            취소
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
