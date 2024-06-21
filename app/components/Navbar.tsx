import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-3 shadow-md">
      <div className="mx-auto flex justify-between items-center">
        <h1 className="text-3xl text-white font-bold">Todo App</h1>
        <ul className="flex text-white">
          <li className="p-2 transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="p-2 transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="p-2 transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105">
            <Link href={"/"}>Todos</Link>
          </li>
          <li className="p-2 transition duration-300 ease-in-out transform hover:text-yellow-400 hover:scale-105">
            <Link href={"/contact"}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
