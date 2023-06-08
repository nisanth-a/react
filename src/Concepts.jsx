import React from "react";
import { Link } from "react-router-dom";
import "./Concepts.css";
import logo from "./logo.svg";

function Concepts() {
  return (
    <>
      <span className="header-concepts">
        <img src={logo} className="App-logo-concepts" alt="logo" />
        <h3 className="page-header"> React Concepts </h3>
      </span>

      <div className="container text-center">
        <div className="row">
          <div className="col">
            <ul className="concepts-table">
              <Link to="/introduction" className="concept-links">
                <li className="table-contents">Introduction to React</li>
              </Link>
              <Link to="/rendering" className="concept-links">
                <li className="table-contents">Rendering of Elements</li>
              </Link>
              <Link to="/component" className="concept-links">
                <li className="table-contents">Components</li>
              </Link>
              <Link to="/props" className="concept-links">
                <li className="table-contents">Props</li>
              </Link>
              <Link to="/state" className="concept-links">
                <li className="table-contents">State</li>
              </Link>
              <Link to="" className="concept-links">
                <li className="table-contents">Hooks</li>
              </Link>
              <Link to="/lifecycle-methods" className="concept-links">
                <li className="table-contents">
                  Life Cycle Methods in class components
                </li>
              </Link>
              <Link to="/handling-events" className="concept-links">
                <li className="table-contents">Handling Events</li>
              </Link>
              <Link to="/conditional-rendering" className="concept-links">
                <li className="table-contents">Conditional Rendering</li>
              </Link>
            </ul>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default Concepts;
