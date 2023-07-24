import React, { useState } from "react";
import "../Styles/Signup.css";
import img4 from "../Images/Home/img4.jpg";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { url } from "../Url";
import { Button, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { BsEye, BsEyeSlash,  } from "react-icons/bs";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [hidePassword, setHidePassword] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { username, email, gender, password };
    if (username && email && password) {
      if (password !== confPassword) {
        toast({
          title: "Password did not match.",
          description: "Password and confirm password should match.",
          status: "warning",
          duration: 6000,
          isClosable: true,
          position: "top",
        });
        return;
      }

      axios
        .post(`${url}/users/register`, payload)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
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
          });
        })
        .catch((err) => {
          console.log(err);
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
        description: "please fill all fields",
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
          <form action="/login" className="form-signup" onSubmit={handleSubmit}>
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
            </select>
            <br />
            <br />
            <input className="pass1"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button className="hide1"
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? (
                <IoEyeOutline color="green" />
              ) : (
                <IoEyeOffOutline color="gray" />
              )}
              </Button>
            <br />
            <br />
            <input className="pass"
              type={hidePassword ? "text" : "password"}
              value={confPassword}
              placeholder="Confirm Password"
              autoComplete="off"
              onChange={(e) => setConfPassword(e.target.value)}
            />
            <Button
              className="hide1"
              onClick={() => setHidePassword((hidePassword) => !hidePassword)}
            >
              {hidePassword ? (
                <BsEye color="green" />
              ) : (
                <BsEyeSlash
                  color="gray"
                  backgroundColor="transparent"
                />
              )}
            </Button>
            <br />
            <br />
            <hr />
            <br />
            <input type="submit" placeholder="Submit" className="submit" />
            <br />
            <p className="p2">
              Already have an account?{" "}
              <Link className="l" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </Parallax>
    </div>
  );
};

export default SignUp;
