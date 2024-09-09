/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Logout from "../Logout/logout";

const Header = ({ setAdminPass, setAddEmployee,handleUndo }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setAddEmployee(true)}>Add Employee</button>
        <Logout setAdminPass={setAdminPass} />
        <button onClick={handleUndo}>Undo</button>
      </div>
    </header>
  );
};

export default Header;
