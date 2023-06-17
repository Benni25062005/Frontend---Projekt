import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import bcrypt from 'bcryptjs';
import "./Stylesheet.css";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const [path, setPath] = useState('');

  const handleLogin = () => {
    if (email.trim() === '' || password.trim() === ''){
      return;
    }

    fetch('http://localhost:3000/user')
    .then(res => res.json())
    .then(data => {
      const user = data.find(data => data.email === email)
      if (user && password === user.passwort) {

        localStorage.setItem('email', email);
        localStorage.setItem('password', hashedPassword);

        if(email == "admin" & password == "admin")
        {
          setPath("/admin")
        }else{
          setPath("/comment")
        }
      } else{
        alert("Anmeldedaten nicht richitg!")
      }
    })
    .catch(error => {
      console.log(error)
    });
  

  const hashedPassword = bcrypt.hashSync(password, 10)
 

}

// hook mit path variable useState 
// setPath auf path setzten mit IF abrage 
// Path variabel unten einsetzen

    return(<>
        <h2 className="text-center text-3xl mt-10 bg-slate-200 rounded-xl mx-auto h-10 w-1/3">Login</h2>
        <div className="flex flex-col items-center mt-8 w-1/3 mx-auto h-80 bg-slate-100 rounded-xl shadow-lg   ">
            <label className="mt-7 text-xl">Email</label>
            <input className="bg-slate-100  mt-2 w-60" type="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />

            <label className="mt-7 text-xl">Passwort</label>
            <input className="bg-slate-100  mt-2 w-60" type="password" id="password" placeholder="Passwort" value={password} onChange={e => setPassword(e.target.value)}/>

            <Link to={path}>
              <button className="bg-slate-200 rounded-xl mt-14 w-60 h-8" type="submit" id="btnsubmit" onClick={handleLogin}  >Login</button>
            </Link>
            
            <Link to="/register">
            <button className="bg-slate-200 rounded-xl mt-14 w-44 h-8 mt-3">Registrieren</button>
            </Link>
        </div>

    </>)
  }
