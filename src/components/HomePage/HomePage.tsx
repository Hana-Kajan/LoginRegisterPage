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


  const[id, postaviID]=useState(1);
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

  useEffect(()=> {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((res)=>res.json())
    .then((data)=>postaviPodatak(data));
  }, [id]);

  function idPromjena(e:
    React.ChangeEvent<HTMLInputElement>) {
      const value=Number(e.target.value);
      if (value >=1 && value<=100) {
        postaviID(value);
      }
    }
  

  return (
    <div className="home-page">
      <div className="home-page__welcome">
      <h1>Dobrodošli!</h1>
      <label htmlFor="broj">Unesi id poruke:</label>
      <input onChange={idPromjena}
       type="number"
       min={1}
       max={100}
       value={id}
       id="broj" />
       <h3>{podatak.title}</h3>
       <p>{podatak.body}</p>
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
