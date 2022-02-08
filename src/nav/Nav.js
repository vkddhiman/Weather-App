import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "./pexels-photo.jpeg";

const Nav = () => {
  return (
    <Fragment>
      <div className="header">
        <nav className="nav">
          <ul>
            <img
              src={logo}
              alt="logo"
              style={{ height: "80px", width: "80px", marginLeft: "20px" }}
            />
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/forcast">Forcast</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Nav;
