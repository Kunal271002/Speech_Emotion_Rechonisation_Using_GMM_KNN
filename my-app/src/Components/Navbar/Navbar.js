import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Route, Router, Routes } from "react-router-dom";
import InputFile from "../InputFile.js";
export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary kunal">
        <div className="container-fluid kunal">
          <a className="navbar-brand kunal" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button
                className="btn btn-dark dropdown-toggle kunal"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                margin-right="100px"
              >
                Featrues
              </button>
              <ul className="dropdown-menu dropdown-menu-dark container">
                <li>
                  <a className="dropdown-item" href="#">
                    Extracting Audio from Video
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Detecting Emotions
                  </a>
                </li>
              </ul>
              <a className="nav-link kunal" href="/">
                <Link to="InputFile">.AVI to .WAV</Link>
              </a>
              <a className="nav-link kunal" href="/">
                <Link to="Contact">Contact</Link>
              </a>
              <a className="nav-link kunal" href="/">
                <Link to="About">About</Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

