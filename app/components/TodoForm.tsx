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
    <div className="flex flex-col items-center justify-center">
      <div className="self-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:flex-row items-center mt-14"
        >
          <input
            type="text"
            className="w-80 md:w-96 rounded-sm border-2 border-cyan-400 p-2 text-black outline-none focus:ring-2 focus:ring-red-700"
            placeholder="Type something here..."
            onChange={(e) => setItem(e.target.value)}
            value={item}
          />
          <button
            type="submit"
            className="mt-2 md:mt-0 md:ml-2 w-32 md:w-12 rounded-sm bg-cyan-200 p-2 text-center text-black hover:bg-cyan-400"
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
    </div>
  );
}
