import React, { useState } from 'react';
import './login.css';
import {useLocation, useNavigate } from "react-router-dom";


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const navigate= useNavigate();
  const backToLogin = (e) => {
    e.preventDefault();
    navigate("/");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/success")
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
        <h2 className='logintitle'>Sign up</h2>
        <h3 className='logindesc'>Welcome back, create an account now.</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <button type="submit">Sign Up</button>
          <button style={{marginTop:"10px", backgroundcolor:"grey"}} onClick={backToLogin} >Back to login page</button>
        </form>
        
      </div>
     
    </div>
  );
};

export default Signup;