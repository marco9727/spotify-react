import logo from "../assets/logo/logo.png";
import Button from "react-bootstrap/Button";
import { BsHouseDoorFill, BsBookFill } from "react-icons/bs";
import React from "react";

const Sidebar = () => {
  return (
    <div className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbra-brand">
            <img src={logo} alt="Spotify logo" width="131" height="40" />
          </a>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <BsHouseDoorFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <BsBookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <form className="input-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary btn-sm h-100"
                        type="submit"
                      >
                        GO
                      </button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn">
          <button className="btn signup-btn" type="button">
            Sign Up
          </button>
          <button className="btn login-btn" type="button">
            Login
          </button>
          <a href="#">Cookie Policy</a> |<a href="#">Privacy</a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
