import React from 'react'
import './success.css';
import { useNavigate } from "react-router-dom";


function Success() {
    const navigate= useNavigate();
    const backToLogin = (e) => {
      e.preventDefault();
      navigate("/");
    };
    return (
        <div className='successful' style={{alignContent:"center"}}>
            <h1 className='successmsg'>Successfully logged in :D</h1>
            <img className="gif"src='https://media.tenor.com/a9kOCT4QN8cAAAAC/congratulations-african.gif'/>
            <button className='backbtn' type="button" onClick={backToLogin}>Back to Login Page</button>
        </div>
    )
}

export default Success