import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../Login";
import { Registration } from "../Registration";
//import "./HomePage.scss";

type TodoProps = {
    todo?: string;
    onRemove?: ()=>void
};

export const TodoItem: FC<TodoProps> = ({todo, onRemove}) => {
  
  return (
  <div className="todo-items">
    <h1>Todo Item</h1>
    <span>{todo}</span>
    <button onClick={()=>onRemove}>Obrisi</button>
    <input type="text" />
  </div>
  );
};
