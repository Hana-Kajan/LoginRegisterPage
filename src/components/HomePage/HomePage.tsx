import React, { useState, useEffect, useRef } from "react";

import { Registration } from "../Registration";
import { Login } from "../Login";

 export const HomePage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleLoginClick = () => {
    setIsLogin(true);
    setIsRegister(false);
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
    setIsLogin(false);
  };

  const handleLogin = (username: string, password: string) => {
    console.log('Login:', username, password);
    // Logika za autentifikaciju
  };

  const handleRegister = (username: string, password: string) => {
    console.log('Register:', username, password);
    // Logika za registraciju
  };
return(
  
  <div>
  <h1>Welcome to Home Page</h1>
  {!isLogin && !isRegister && (
    <div>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleRegisterClick}>Register</button>
    </div>
  )}

  {isLogin && <Login onLogin={handleLogin} />}
  {isRegister && <Registration onRegister={handleRegister} />}
</div>
  );
};
