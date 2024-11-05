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


export const App: FC = () => {
  return (
   <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/register" element={<Registration/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/welcome" element={<WelcomePage/>}/>
    <Route path="*" element={<Navigate to="/"/>}/>
   </Routes>
  );
};


export default App;





