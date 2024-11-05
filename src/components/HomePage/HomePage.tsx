import React, { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "../Login";
import { Registration } from "../Registration";
import "./HomePage.scss";

export const HomePage: FC = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <div className="home-page">
      <div className="home-page__welcome">
      <h1>Dobrodošli!</h1>
      
        <button className="home-page__start-button" onClick={()=>navigate("/register")}>Registracija</button>
      </div>
    </div>
  );
};
