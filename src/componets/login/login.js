import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const Login = () => {
  const history = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/login", {
          username,
          password,
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/", { state: { id: username } });
          } else if (res.data == "not exist") {
            alert("User is not registered");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div className="login-page">
      <div className="form">
        <span className="Logintext">Login</span>
        <br />
        <br />
        <br />
        <form className="login-form" action="POST">
          <div>
            <input
              type="text"
              name="username"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              required
              autoComplete="off"
              placeholder="Enter username"
            />
          </div>
          <br />
          <br />
          <div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              autoComplete="off"
              required
              placeholder="Enter password"
            />
          </div>
          <br />
          <br />
          <div className="footer">
            <button type="submit" className="loginbtn" onClick={submit}>
              Login
            </button>
            <br />
            <br />
            <p className="abcd">
              New User!
              <Link to="/signup" className="signuplink">
                Signup
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

/*
axios
cors
express
mongoose
nodemon*/
