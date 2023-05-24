import React, { useState } from 'react';
import './login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    // backend logic here
    /* if successful use this to navigate to the success page
    navigate("/success");
    */

  };

  return (
    <div className="login-container">
      <div className='background'>
        <img className="logo"src='https://cdn.discordapp.com/attachments/794551109523341353/1110957241340801104/logo.png'/>
        <h1 className='assignmenttitle'>WADS OAuth2</h1>
        <h2 className='names'>Ferdinand-Richie-Maria-Raissa</h2>
        <h4 className='desc'>We are students from class L4AC Computer Science. This is our assignment for Web Application Development and Security on the topic of OAuth2 with FastAPI. This project is referencing the tutorial and the documentation from https://fastapi.tiangolo.com/tutorial/security/.</h4>
      </div>
      <div className='loginbox'>
        <h2 className='logintitle'>Login</h2>
        <h3 className='logindesc'>Welcome back, login to your account now.</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
     
    </div>
  );
};

export default Login;
