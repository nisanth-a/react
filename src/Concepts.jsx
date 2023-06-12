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
              <h3>Session 1 & 2</h3>
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
              <h3>Session 3</h3>
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
              <h3>Session 4</h3>
              <Link to="/forms" className="concept-links">
                <li className="table-contents">Forms</li>
              </Link>
              <Link to="/type-checking" className="concept-links">
                <li className="table-contents">Type Checking</li>
              </Link>
              <Link to="/uni-directional" className="concept-links">
                <li className="table-contents">Uni-Directional Data Flow</li>
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
