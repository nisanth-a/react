import React from "react";

export default function Employees() {
  return (
    <div className="home-routes">
      <h2>Employees Data</h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Designation</th>
          <th>Salary</th>
        </tr>
        <tr>
          <td>Ajay</td>
          <td>Police</td>
          <td>Circle Inspector</td>
          <td>40000</td>
        </tr>
        <tr>
          <td>Vijay</td>
          <td>Education</td>
          <td>Head Master</td>
          <td>80000</td>
        </tr>
        <tr>
          <td>Afridi</td>
          <td>Revenue</td>
          <td>Collector</td>
          <td>50000</td>
        </tr>
      </table>
    </div>
  );
}
