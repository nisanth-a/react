import React from "react";
import { Link } from "react-router-dom";

export default function HomeRouting() {
  return (
    <div className="home-routes">
      <h1>Welcome to Home Page</h1>
      <ul>
        <li>
          <Link to="/employees">Employees</Link>
        </li>
        <li>
          <Link to="/departments">Departments</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </div>
  );
}
