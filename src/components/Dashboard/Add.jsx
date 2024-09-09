import React, { useState,useEffect } from "react";
import Swal from "sweetalert2";

const Add = ({ updatedEmployee,employee, setIsEditing }) => {
  //on pre-fill mode: fill or go to make empty 
  const [firstName, setFirstName] = useState(employee ? employee.firstName : "");
  const [lastName, setLastName] = useState(employee ? employee.lastName : "");
  const [email, setEmail] = useState(employee ? employee.email : "");
  const [salary, setSalary] = useState(employee ? employee.salary : "");
  const [date, setDate] = useState(employee ? employee.date : "");


  useEffect(() => {
    if (employee) {
      // Populate fields if editing
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setEmail(employee.email);
      setSalary(employee.salary);
      setDate(employee.date);
    }
  }, [employee]);

  const handleAdding = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !salary || !date) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    //const id = updatedEmployee.length + 1;
    const updated_employee = employee ?{... employee, firstName, lastName, email, salary, date} :{
      id: Math.random().toString(36).substr(2, 9),
      firstName,
      lastName,
      email,
      salary,
      date,
    };
    // updatedEmployee.push(updated_employee);
    // localStorage.setItem("list_employees", JSON.stringify(updatedEmployee));
    // setUpdatedEmployee(updatedEmployee);
    // setAddEmployee(false);
    updatedEmployee(updated_employee);

    Swal.fire({
      icon: "success",
      title: employee ? "Updated !" :"Added !",
      text: `${firstName} ${lastName}'s data has been ${employee ? "updated" : "added"}.`,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <div>
      <div className="small-container">
        <form onSubmit={handleAdding}>
        <h1>{employee ? "Edit Employee" : "Add Employee"}</h1>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="salary">Salary</label>
          <input
            id="salary"
            type="number"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div style={{ marginTop: "30px" }}>
          <input type="submit" value={employee ? "Update" : "Add"} />
            <input
              style={{ marginLeft: "12px" }}
              className="muted-button"
              type="button"
              value="Cancel"
              onClick={() => setIsEditing && setIsEditing(false)}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
