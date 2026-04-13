import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h2>Login</h2>

      <input type="email" placeholder="Enter email" /><br/><br/>
      <input type="password" placeholder="Enter password" /><br/><br/>

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;