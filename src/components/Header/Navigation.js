// src/components/Header/Navigation.js
import React from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div className="container">
          <div className="navbar-brand">Stijn Huiskes</div>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/Portfolio">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
