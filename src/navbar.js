import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import Popup from "./componets/popup";
import { useState } from "react";

const Navbar = () => {
  const [Buttonpopup, setButtonpopup] = useState(false);
  return (
    <div className="container-fluid nav_bg">
      <div className="row">
        <div className="col-10 mx-auto">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
              <NavLink className="navbar-brand" id="title" to="/">
                Accu-Balance
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item navelements">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-NavLinkactive"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item navelements">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-Link"
                      to="/service"
                    >
                      Services
                    </NavLink>
                    <ul className="dropdown">
                      <li>
                        <NavLink to="/invoice">Invoice generator</NavLink>{" "}
                      </li>
                      <li>
                        <NavLink to="/expensetracker">Expense tracker</NavLink>{" "}
                      </li>
                      <li>
                        <NavLink to="/">Financial reporting</NavLink>{" "}
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item navelements">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-Link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item navelements">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-Link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="login">
                    <NavLink className="btn-get-started" to="/login">
                      Login
                    </NavLink>
                    <Popup trigger={Buttonpopup} setTrigger={setButtonpopup}>
                      <h3>My popup</h3>
                    </Popup>
                  </li>
                  <li className="login">
                    <NavLink className="btn-get-started" to="/signup">
                      Signup
                    </NavLink>
                    <Popup trigger={Buttonpopup} setTrigger={setButtonpopup}>
                      <h3>My popup</h3>
                    </Popup>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
