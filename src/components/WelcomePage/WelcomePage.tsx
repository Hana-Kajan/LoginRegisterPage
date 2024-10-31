import { randomInt } from "crypto";
import React, { useState, useEffect, useRef } from "react";
 export const WelcomePage: React.FC = () => {
  const [email,setEmail] =useState("");
  const [name,setName] =useState("");
  const [password,setPassword] =useState("");
  const [gender,setGender] =useState("");
  const [country,setCountry] =useState("");

function spasi()
{
  console.log(`Email : ${email}, Name : ${name}, Gender : ${gender}, Country : ${country}`);
}
return(
  
      <div className="registration">
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
    
      <button onClick={spasi}>Spasi</button>

    </div>
  );
};
