import React, { useState } from "react";
import "../Styles/Signup.css";
import img4 from "../Images/Home/img4.jpg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.prevenDefault()
    const payload = { username, email, gender, password };
    fetch("localhost:3000/users/register",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }).then(res=> res.json())
    .then(res=> console.log(res))
    .catch(err=> console.log(err))
    setUsername("")
    setEmail("")
    setGender("")
    setPassword("")
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Parallax strength={400} bgImage={img4}>
        <div className="signup-main">
          <form className="form-signup" onSubmit={handleSubmit}>
            <p className="p1">Register</p>
            <hr />
            <br />
            <input
              type="text"
              value={username}
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <br />
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="transgender">Transgender</option>
            </select>
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
            <input type="submit" placeholder="Submit" className="submit" />
            <br />
            <p className="p2">
            Already have an account? <Link className="l" to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </Parallax>
    </div>
  );
};

export default SignUp;
