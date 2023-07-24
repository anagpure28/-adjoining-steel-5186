import React, { useState } from "react";
import "../Styles/AdminLogin.css";
import admin from "../Images/Home/admin.png";
import { Parallax } from "react-parallax";
import { Link, useNavigate } from "react-router-dom";
import { url } from "../Url";
import axios from "axios";
import { Button, useToast } from "@chakra-ui/react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { email, password };
    if (email && password) {
      axios
        .post(`${url}/users/login`, payload)
        .then((res) => {
          console.log(res, "AdminLOGIN");
          if (res.status === 200) {
            localStorage.setItem("AdminToken", res.data.token);
            setTimeout(() => {
              navigate("/admindashboard");
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
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              className="hide"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <AiOutlineEye color="green" />
              ) : (
                <AiOutlineEyeInvisible color="gray" />
              )}
            </Button>

            <br />
            <br />
            <hr />
            <br />
            <button className="submit2" onClick={handleSubmit}>
              Login
            </button>
            <br />
            <p className="p2">
              <Link className="l" to={"/"}>
                Back to Home
              </Link>
            </p>
          </form>
        </div>
      </Parallax>
    </div>
  );
};
export default AdminLogin;
