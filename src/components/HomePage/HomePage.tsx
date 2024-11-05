import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom"; // Uvezi useNavigate iz react-router-dom
import { Login } from "../Login"; // Importuj Login komponentu
import { Registration } from "../Registration"; // Importuj Registration komponentu

export const HomePage: FC = () => {
  const navigate = useNavigate(); // Inicijalizuj useNavigate

  const handleLoginClick = () => {
    navigate("/login"); // Navigiraj na login putanju
  };

  const handleRegisterClick = () => {
    navigate("/register"); // Navigiraj na register putanju
  };

  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <div>
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleRegisterClick}>Register</button>
      </div>
    </div>
  );
};
