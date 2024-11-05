import { randomInt } from "crypto";
import React, { FC,useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Registration.scss";
import { json } from "stream/consumers";

 export const Registration: FC = ({}) => {
  const [email,setEmail] =useState("");
  const [name,setName] =useState("");
  const [password,setPassword] =useState("");
  const [gender,setGender] =useState("");
  const [country,setCountry] =useState("");
  const navigate = useNavigate();

  const handleRegister=()=> {
    localStorage.setItem("user", JSON.stringify({email, password}));
    navigate("/login");
  };
  console.log(localStorage.getItem("user"));

/*function spasi()
{
  console.log(`Email : ${email}, Name : ${name}, Gender : ${gender}, Country : ${country}`);

  navigate("/welcome", { state: { message: `Uspješno ste se registrovali, ${name} !` } });
}
  */

return( 

      <div className="registration-page">
      <label>Name:
      <input type="text" value={name} onChange={(e)=>setName((e.target.value))}></input>
      </label>
      <p></p>
      <label>Password:
      <input type="password" placeholder="password" value={password} onChange={(e)=>setPassword((e.target.value))}></input>
      </label>
      <p></p>
      <label>Email:
      <input type="email" value={email} onChange={(e)=>setEmail((e.target.value))}></input>
      </label>
      <p></p>
      <label>Gender:
      <input type="radio" value="other" checked={gender==="other"} onChange={(e)=>setGender((e.target.value))}></input>Other
      <input type="radio" value="male" checked={gender==="male"} onChange={(e)=>setGender((e.target.value))}></input>Male
      <input type="radio" value="female" checked={gender==="female"} onChange={(e)=>setGender((e.target.value))}></input>Female
      </label>
      <p></p>
      <label>Country:
      <select value={country} onChange={(e)=>setCountry((e.target.value))} required >
      <option value="">Select your country</option>
      <option value="us">United States</option>
      <option value="uk">UK</option>
      <option value="bih">BIH</option>

      </select>
      </label>

      <p></p>
    
      <button onClick={handleRegister}>Spasi</button>

    </div>
  );
};