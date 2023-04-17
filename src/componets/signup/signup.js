import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  async function submit(e) {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:8000/signup", {
          username,
          password,
          email,
          name,
        })
        .then((res) => {
          if (res.data == "exist") {
            alert("User already exists");
          } else if (res.data == "not exist") {
            history("/", { state: { id: username } });
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
    <section className="signup">
      <div className="container mt-5">
        <div className="signup-content">
          <div className="signup-form">
            <span className="signuptext">Signup</span>{" "}
            <form id="register-form" className="register-form" action="POST">
              <br />
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-account-box"></i>
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  autoComplete="off"
                  placeholder="Enter your Username "
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i className="zmdi zmdi-account material-icons-name"></i>
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  autoComplete="off"
                  placeholder="Enter name"
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-email"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  autoComplete="off"
                  placeholder="Enter your email "
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="name">
                  <i class="zmdi zmdi-key"></i>
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  autoComplete="off"
                  placeholder="Enter your password "
                />
              </div>
              <br />
              <div className="footer">
                <button type="submit" className="signupbtn" onClick={submit}>
                  Signup
                </button>
                <p>
                  Already have an account?{" "}
                  <span>
                    <Link to="/login">Login</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
