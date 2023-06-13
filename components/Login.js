import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import "./Stylesheet.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const handleLogin = () => {

  console.log("test")

  const hashedPassword = bcrypt.hashSync(password, 10)
  localStorage.setItem('email', email);
  localStorage.setItem('password', hashedPassword);

 
}
   
    return(<>
        <h2 className="text-center text-3xl mt-10 bg-slate-200 rounded-xl mx-auto h-10 w-1/3">Login</h2>
        <div className="flex flex-col items-center mt-8 w-1/3 mx-auto h-80 bg-slate-100 rounded-xl shadow-lg   ">
            <label className="mt-7 text-xl">Email</label>
            <input className="bg-slate-100  mt-2 w-60" type="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

            <label className="mt-7 text-xl">Passwort</label>
            <input className="bg-slate-100  mt-2 w-60" type="password" id="password" placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)}/>

            <Link to="/comment">
              <button className="bg-slate-200 rounded-xl mt-14 w-60 h-8" type="submit" id="btnsubmit" onClick={handleLogin}  >Login</button>
            </Link>
        </div>

        
        
        
    </>)
  }
