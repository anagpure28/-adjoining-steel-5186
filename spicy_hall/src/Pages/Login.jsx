import React, { useState } from "react";
import "../Styles/Signup.css";
import img4 from "../Images/Home/img4.jpg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {email, password };
    fetch("localhost:3000/users/login",{
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
      }).then(res=> res.json())
      .then(res=> {
        console.log(res)
        localStorage.setItem("token", res.token)
      })
      .catch(err=> console.log(err))
      setEmail("")
      setPassword("")
    }


  return (
    <div style={{ backgroundColor: "black" }}>
      <Parallax strength={400} bgImage={img4}>
        <div className="signup-main">
          <form className="form-login" onSubmit={handleSubmit}>
            <p className="p1">Login</p>
            <hr />
            <br />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <hr />
            <br />
            <button className="submit2" onClick={handleSubmit}>Login</button>
            <br />
            <p className="p2">
            Create account? <Link className="l" to={"/register"}>Signup</Link>
            </p>
          </form>
        </div>
      </Parallax>
    </div>
  );
};

export default Login;
