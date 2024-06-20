"use client";
import React, { useEffect, useState } from "react";
import TodoList, { Todo } from "./TodoList";

export default function TodoForm() {
  const [item, setItem] = useState("");
  const [visibility, setVisibility]: [string, any] = useState("Hide");
  const [todos, setTodos]: [Todo[], any] = useState([]);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (item === "") return;

    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: item, isCompleted: false },
    ]);

    setItem("");
  };

  const updateIsCompleted = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const setVisibilityText = () => {
    if (visibility === "Show") {
      setVisibility("Hide");
    } else {
      setVisibility("Show");
    }
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos") || "[]");

    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col items-start">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center mt-14"
      >
        <input
          type="text"
          className="rounded-sm p-2 w-96 text-black outline-none focus:ring-2 focus:ring-red-700 border-2 border-cyan-400"
          placeholder="Type something here..."
          onChange={(e) => setItem(e.target.value)}
          value={item}
        />
        <button
          type="submit"
          className="bg-cyan-200 text-black p-2 ml-2 text-center rounded-sm hover:bg-cyan-400"
        >
          Add
        </button>
      </form>

      <TodoList
        todos={todos}
        updateIsCompleted={updateIsCompleted}
        deleteTodo={deleteTodo}
        btnText={visibility}
        setVisibilityText={setVisibilityText}
      />
    </div>
  );
}
