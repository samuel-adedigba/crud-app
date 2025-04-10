import { useState } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import { employeesData } from "../../Data/data";


const Dashboard = ( {setAdminPass}) => {
  const [addEmployee, setAddEmployee] = useState(false); // brings out the form for either edit or update
  const [allEmployee, setAllEmployee] = useState(
    JSON.parse(localStorage.getItem("list_employees")) || employeesData
  ); //saves all employee data  
  const [previousState, setPreviousState] = useState([]); //saves the data for previous value state for allEmployees
  const [isEditing, setIsEditing] = useState(false); //makes it possible to edit or not
  const [currentEmployee, setCurrentEmployee] = useState(null); //saves the edited/selected employee id

  const handleAddEmployees = (newEmployee) => {
    setPreviousState(allEmployee);
    const updatedEmployees = [...allEmployee, newEmployee];
    setAllEmployee(updatedEmployees);
    localStorage.setItem("list_employees", JSON.stringify(updatedEmployees)); //persist storage
    setAddEmployee(false); //close add employee form
  };
 
  //this function updates the edited employee data with the existing ones and then stores/persist it back
  //this is possible when the edit button is being clicked
  const handleUpdateEmployee = (updatedData) => {
    setPreviousState(allEmployee);
    const updatedEmployees = allEmployee.map((e) =>
      e.id === updatedData.id ? updatedData : e    );
    setAllEmployee(updatedEmployees);
    localStorage.setItem("list_employees", JSON.stringify(updatedEmployees));
    setIsEditing(false);
  };
  const handleUndo = () => {
    if (previousState.length) {
      setAllEmployee(previousState); // Restore the previous state
      localStorage.setItem("list_employees", JSON.stringify(previousState));
      setPreviousState([]); // Clear previous state after restoring
    } else {
      Swal.fire({
        icon: "info",
        title: "Info",
        text: "No changes to undo.",
        showConfirmButton: true,
      });
    }
  };

  //a function to find the selected employee data by id. Saves the selected id found found in the currentEmployee state
  //it then passes the value state of currentEmployee as props in the Add component whenever an edit is to be made and all prefill visible
  const handleEdit = (id) => {
    const editEmployee = allEmployee.find((e) => e.id === id);
    setCurrentEmployee(editEmployee);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setPreviousState(allEmployee);
    const deleteEmployees = allEmployee.filter((e) => e.id !== id);
    Swal.fire({
      timer: 1500,
      showConfirmButton: false,
      title: "Loading...",
      willOpen: () => {
        Swal.showLoading();
      },
      willClose: () => {
        setAllEmployee(deleteEmployees);
        localStorage.setItem("list_employees", JSON.stringify(deleteEmployees));
        Swal.fire({
          title: "Delete Successful",
          icon: "success",
          showConfirmButton: false,
        });
      },
    });
  };
  return (
    <div>
      <Header setAddEmployee={setAddEmployee} handleUndo={handleUndo}  setAdminPass={setAdminPass}/>
      {!addEmployee && !isEditing ? ( // no employees mode and edit mode, make table comp. visible
        <Table
          allEmployee={allEmployee}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ) : addEmployee ? ( //add employee mode only
        <Add updatedEmployee={handleAddEmployees} /> //gets form visible when you want to add new employee detail only
      ) : (
        //to add mode + edit mode
        <Add
          updatedEmployee={handleUpdateEmployee} //update selected employee id
          employee={currentEmployee} //makes prefill possible running with the selected employee id
          setIsEditing={setIsEditing} //wanna edit or not
        />
      )}
    </div>
  );
};

export default Dashboard;
