/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Logout from "../Logout/logout";

const Header = ({ setAdminPass, setAddEmployee, handleUndo }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setAddEmployee(true)}>Add Employee</button>
        <button
          style={{ marginLeft: "20px", marginRight: "20px" }}
          onClick={handleUndo}
        >
          Undo
        </button>
        <Logout setAdminPass={setAdminPass} />
      </div>
    </header>
  );
};

export default Header;
