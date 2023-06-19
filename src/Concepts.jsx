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
        <div className="row-concepts">
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
            </ul>
          </div>
          <div className="col">
            <h3>Session 3</h3>
            <ul className="concepts-table">
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
          <div className="col">
            <ul className="concepts-table">
              <h3>Session 4</h3>
              <Link to="/forms" className="concept-links">
                <li className="table-contents">Forms</li>
              </Link>
              <Link to="/lifting-state-up" className="concept-links">
                <li className="table-contents">Lifting State Up</li>
              </Link>
              <Link to="/composition-inheritance" className="concept-links">
                <li className="table-contents">Composition vs Inheritance</li>
              </Link>
              <Link to="/type-checking" className="concept-links">
                <li className="table-contents">Type Checking</li>
              </Link>
              <Link to="/uni-directional" className="concept-links">
                <li className="table-contents">Uni-Directional Data Flow</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className="row-concepts">
          <div className="col">
            <ul className="concepts-table">
              <h3>Session 5</h3>
              <Link to="/homerouting" className="concept-links">
                <li className="table-contents">React Routing</li>
              </Link>
              <Link to="/ref-react" className="concept-links">
                <li className="table-contents">Refs in React</li>
              </Link>
              <Link to="/composition-inheritance" className="concept-links">
                <li className="table-contents">Context API</li>
              </Link>
              <Link to="/type-checking" className="concept-links">
                <li className="table-contents">Fragments</li>
              </Link>
            </ul>
          </div>

          <div className="col" style={{ visibility: "hidden" }}>
            <ul className="concepts-table">
              <h3>Session 6</h3>
              <Link to="/forms" className="concept-links">
                <li className="table-contents">React Hooks</li>
              </Link>
              <Link to="/lifting-state-up" className="concept-links">
                <li className="table-contents">Lifting State Up</li>
              </Link>
              <Link to="/composition-inheritance" className="concept-links">
                <li className="table-contents">Composition vs Inheritance</li>
              </Link>
              <Link to="/type-checking" className="concept-links">
                <li className="table-contents">Type Checking</li>
              </Link>
              <Link to="/uni-directional" className="concept-links">
                <li className="table-contents">Uni-Directional Data Flow</li>
              </Link>
            </ul>
          </div>

          <div className="col" style={{ visibility: "hidden" }}>
            <ul className="concepts-table">
              <h3>Session 7</h3>
              <Link to="/forms" className="concept-links">
                <li className="table-contents">Forms</li>
              </Link>
              <Link to="/lifting-state-up" className="concept-links">
                <li className="table-contents">Lifting State Up</li>
              </Link>
              <Link to="/composition-inheritance" className="concept-links">
                <li className="table-contents">Composition vs Inheritance</li>
              </Link>
              <Link to="/type-checking" className="concept-links">
                <li className="table-contents">Type Checking</li>
              </Link>
              <Link to="/uni-directional" className="concept-links">
                <li className="table-contents">Uni-Directional Data Flow</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Concepts;
