import { randomInt } from "crypto";
import React, { FC,useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

 export const Login: FC = ({}) => {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();

function spasi()
{
  console.log(`Email : ${email}, Password: ${password}`);

  navigate("/welcome", { state: { message: `Uspješno ste se logovali, ${email}!` } });
}

return(  

      <div>
      
      <p></p>
      <label>Password:
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword((e.target.value))}></input>
      </label>
      <p></p>
      <label>Email:
      <input type="email" value={email} onChange={(e)=>setEmail((e.target.value))}></input>
      </label>
    
      <button onClick={spasi}>Spasi</button>

    </div>
  );
};