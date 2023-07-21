import React, { useEffect, useRef, useState } from "react";
import "../Styles/Admin.css";
import admin from "../Images/Home/admin.png";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const AdminLogin = () => {
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
        localStorage.setItem("AdminToken", res.token)
      })
      .catch(err=> console.log(err))
      setEmail("")
      setPassword("")
    }

  return (
    <div style={{ backgroundColor: "black" }}>
      <Parallax strength={400} bgImage={admin}>
        <div className="admin-main">
          <form className="form-admin" onSubmit={handleSubmit}>
            <p className="p1">Admin Login</p>
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
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <hr />
            <br />
            <button className="submit2" onClick={handleSubmit}>Login</button>
            <br />
            <p className="p2">
             <Link className="l" to={"/"}>Back to Home</Link>
            </p>
          </form>
        </div>
      </Parallax>
    </div>
  )
  }
  export default AdminLogin