import React from "react";
//import { employeesData } from "../../data/data";

const Table = ({ allEmployee, handleEdit, handleDelete }) => {
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>No. </th>
            <th>First Name</th>
            <th> Last Name</th>
            <th> E-Mail</th>
            <th> Salary</th>
            <th> Date </th>
            <th colSpan={2}> Actions</th>
          </tr>
        </thead>
        <tbody>
          {allEmployee.map((e, i) => (
            <tr key={e.id}>
              <td >{i + 1} </td>
              <td> {e.firstName} </td>
              <td> {e.lastName} </td>
              <td> {e.email} </td>
              <td> #{e.salary} </td>
              <td> {e.date} </td>
              <td>
                {" "}
                <button onClick={()=>handleEdit(e.id) }> Edit</button>{" "}
              </td>
              <td>
                {" "}
                <button onClick={()=>handleDelete(e.id) }> Delete</button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
