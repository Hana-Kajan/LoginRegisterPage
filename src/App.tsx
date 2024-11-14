import { randomInt } from "crypto";
import React, { useState, useEffect, useRef, FC } from "react";
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { HomePage } from "./components/HomePage";
import {WelcomePage} from "./components/WelcomePage";
import { Registration } from "./components/Registration";
import { Login } from "./components/Login";
import {TodoList} from "./components/TodoList";
import { TodoCategory } from "./components/TodoCategory";
import { TodoItem } from "./components/TodoItem";
import {Navbar} from "./components/Navbar";
import axios from "axios";






export const App: FC = () => {
  return (
    <>
  <Navbar/>
       <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/welcome" element={<WelcomePage/>}/>
    <Route path="/todoitem" element={<TodoItem/>}/>
    <Route path="/todolist" element={<TodoList/>}/>
    <Route path="/todocategory" element={<TodoCategory/>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
    </>

  );
};


export default App;





