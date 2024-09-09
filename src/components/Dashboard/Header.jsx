import React from "react";
import Logout from "../Logout/logout";

const Header = ({ setLoginPass, setAddEmployee }) => {
  return (
    <header>
      <h1>Employee Management Software</h1>
      <div style={{ marginTop: "30px", marginBottom: "18px" }}>
        <button onClick={() => setAddEmployee(true)}>Add Employee</button>
        <Logout setAdminPass={setLoginPass} />
      </div>
    </header>
  );
};

export default Header;
