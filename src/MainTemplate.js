import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";

function MainTemplate() {
  return (
    <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link to="/template">
          <h5 className="my-content">Click here for React Concepts</h5>
        </Link>
      </header>
    </>
  );
}

export default MainTemplate;
