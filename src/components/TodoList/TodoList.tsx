import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../Login";
import { Registration } from "../Registration";
//import "./HomePage.scss";
import { TodoItem } from "../TodoItem";

type TodoListProps = {
  category?: string,
};

export const TodoList: FC<TodoListProps> = ({category}) => {
  const [task, setTask]=useState<string[]>([]);
  const [newTask, setNewTask]=useState("");
  const addTask=()=>{
    setTask([...task, newTask]);
    setNewTask("");
  };

  const removeTask=(index: number)=> {
    setTask(task.filter((_,i)=>i !==index));
  };

  return (
   <div>
    <input 
    value={newTask}
    onChange={(e)=>setNewTask(e.target.value)}
    placeholder="Novi zadatak"
    />
    <button onClick={addTask} onKeyDown={addTask}>
      Dodaj zadatak
    </button>
    <div>
      {task.map((task, index)=>(
        <TodoItem
        key={index}
        todo={task}
        onRemove={()=>removeTask(index)}
        />
      ))}
    </div>
   </div>
  );
};
