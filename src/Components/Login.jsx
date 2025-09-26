import React, { useState } from "react";
import {TextField} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function Login() {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const isLogin = mode === "login";
  const Navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    console.log(mode, { name, email, password });
    Navigate('/dashboard');
    sessionStorage.setItem("isAuthenticated", "true");
    sessionStorage.setItem("user", { name, email, password });
  }

  return (
    <div className="auth">
      <div className="card">
        <img className="title" src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg" alt="logo" />
        <h2 className="titletext">{isLogin ? "Welcome Back" : "Create an account"}</h2>
        <p className="login-description">Access your contacts portal securely. Manage, organize, and search your network in one place.</p>

        <div className="tabs">
          <button type="button" className={`tab ${isLogin ? "active" : ""}`} onClick={() => setMode("login")}>Log in</button>
          <button type="button" className={`tab ${!isLogin ? "active" : ""}`} onClick={() => setMode("signup")}>Sign up</button>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="">
              {/* <label htmlFor="name">Name</label> */}
              <TextField id="name"fullWidth
						variant="outlined"ype="text" value={name} onChange={(e) => setName(e.target.value)} label="Name" required />
            </div>
          )}

          <div className="">
            {/* <label htmlFor="email">Email</label> */}
            <TextField id="email" fullWidth
						variant="outlined" type="email" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" required />
          </div>

          <div className="">
            {/* <label htmlFor="password">Password</label> */}
            <TextField id="password"fullWidth
						variant="outlined" type="password" value={password} onChange={(e) => setPassword(e.target.value)} label={isLogin ? "Your password" : "Create a password"} minLength={6} required />
          </div>

          <button className="submit" type="submit">{isLogin ? "Log in" : "Create account"}</button>
        </form>

        <p className="hint">
          {isLogin ? "New here?" : "Already have an account?"} {" "}
          <button className="link" type="button" onClick={() => setMode(isLogin ? "signup" : "login")}>{isLogin ? "Create Account" : "Log in"}</button>
        </p>
      </div>

      
    </div>
  );
}

