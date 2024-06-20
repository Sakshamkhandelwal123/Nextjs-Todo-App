import React from "react";

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface Props {
  todos: Todo[];
  updateIsCompleted: (id: string) => void;
  deleteTodo: (id: string) => void;
  btnText: string;
  setVisibilityText?: () => void;
}

export default function TodoList({
  todos,
  updateIsCompleted,
  deleteTodo,
  btnText,
  setVisibilityText,
}: Props) {
  return (
    <div className="flex flex-col items-start mt-14">
      <div className="flex flex-row mb-4">
        <h1 className="text-2xl">Todos: {todos.length}</h1>

        <button
          onClick={setVisibilityText}
          className={`text-2xl ml-5 px-2 text-white ${
            btnText === "Show"
              ? "bg-green-400 rounded-md hover:bg-green-600"
              : "bg-red-400 rounded-md hover:bg-red-600"
          }`}
        >
          {btnText}
        </button>
      </div>

      <ul className={btnText === "Show" ? "hidden" : "block"}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="relative rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 w-[440px] p-1 mb-2"
          >
            <input
              type="checkbox"
              id={todo.id}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 px-2 py-0.1 w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              checked={todo.isCompleted}
              onChange={() => updateIsCompleted(todo.id)}
            />

            <div className="bg-gray-800">
              <h1
                className={`text-2xl p-1 pl-6 text-white ${
                  todo.isCompleted ? "line-through" : ""
                }`}
              >
                {todo.title}
              </h1>
            </div>

            <button
              type="button"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-red-500 px-2 py-0.1 rounded-full hover:bg-red-600 hover:text-white"
              onClick={() => deleteTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
