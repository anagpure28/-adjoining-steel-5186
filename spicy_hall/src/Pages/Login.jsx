import React, { useState } from "react";
import "../Styles/Signup.css";
import img4 from "../Images/Home/img4.jpg";
import { Parallax } from "react-parallax";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import {url} from "../Url"
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    if (email && password) {
      axios
        .post(`${url}/users/login`, payload)
        .then((res) => {
          console.log(res, "LOGIN");
          if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            setTimeout(() => {
              navigate("/");
            }, 2000);
          }
          toast({
            title: res.statusText,
            description: res.data.msg,
            status: res.data.status,
            duration: 6000,
            isClosable: true,
            position: "top",
            colorScheme: "green"
          });
        })
        .catch((err) => {
          console.log(err)
          toast({
            description: "Wrong Credentials",
            status: "error",
            duration: 6000,
            isClosable: true,
            position: "top",
          });
        });
    } else {
      toast({
        // title: '',
        description: "Please fill all fields",
        status: "error",
        duration: 6000,
        isClosable: true,
        position: "top",
      });
    }
  };

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
            <button className="submit2" onClick={handleSubmit}>
              Login
            </button>
            <br />
            <p className="p2">
              Create account?{" "}
              <Link className="l" to={"/register"}>
                Signup
              </Link>
            </p>
          </form>
        </div>
      </Parallax>
    </div>
  );
};

export default Login;
