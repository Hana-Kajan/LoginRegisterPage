import React, { FC, useEffect, useState } from "react";
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

  const[podatak, postaviPodatak]=useState({
    body: "",
    id:null,
    title: "",
    userId: null,
  });

  function dohvatiPodatke() {
    const url = "https://jsonplaceholder.typicode.com/todos/1";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        postaviPodatak(json);
      });
  }

  //useEffect(()=> {
    //dohvatiPodatke();
  //}, []);

  return (
    <div className="home-page">
      <div className="home-page__welcome">
      <h1>Dobrodošli!</h1>
      
        <button className="home-page__start-button" onClick={()=>navigate("/register")}>Registracija</button>
        <button onClick={dohvatiPodatke}>Dohvati Podatke</button>
        {podatak.id && (
        <div>
          <h2>Prikaz podataka:</h2>
          <p>ID: {podatak.id}</p>
          <p>Title: {podatak.title}</p>
          <p>Body: {podatak.body}</p>
          <p>User ID: {podatak.userId}</p>
        </div>
        )}
      </div>
    </div>
  );
};
