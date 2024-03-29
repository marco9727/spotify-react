import logo from "../assets/logo/logo.png";
import Button from "react-bootstrap/Button";
import { BsHouseDoorFill, BsBookFill } from "react-icons/bs";
import React, { useState } from "react";

const Sidebar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSidebarSearch = (event) => {
    event.preventDefault();
    onSearch(query); // Effettua la ricerca solo all'invio
  };

  return (
    <div className="col col-2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a href="home" className="navbra-brand">
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
                    href="home"
                  >
                    <BsHouseDoorFill />
                    &nbsp; Home
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="your library"
                  >
                    <BsBookFill />
                    &nbsp; Your Library
                  </a>
                </li>
                <li>
                  <form
                    className="input-group mt-3"
                    onSubmit={handleSidebarSearch}
                  >
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Search"
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                      value={query}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <Button
                        className="btn btn-outline-secondary btn-sm h-100"
                        type="submit"
                      >
                        GO
                      </Button>
                    </div>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="nav-btn">
          <div id="button">
            <Button className="btn" id="signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn" id="login-btn" type="button">
              Login
            </Button>
          </div>
          <a href="#">Cookie Policy</a> |<a href="#">Privacy</a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
