import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/login";

function App() {
  const [isPass, setAdminPass] = useState(null);
  useEffect(() => {
    setAdminPass(JSON.parse(localStorage.getItem("adminpass"))); //admin authorization for each component is saved on the local storage in the key value 'adminpass'
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isPass ? (
              <Dashboard setAminPass={setAdminPass} /> //if admin auth is true dashboard component will execute
            ) : (
              <Login setAdminPass={setAdminPass} /> // if false Login-page component will come in. passed in props from login component is setLoginPass(set to execute code[setAdminPass] that checks the admin auth)
            )
          }
        />
        <Route path="/login" element={<Login setAdminPass={setAdminPass} />} />
      </Routes>
    </Router>

    // <div>
    //   {isPass ? (
    //     <Dashboard setDashboardPass={setAdminPass} /> //if admin auth is true dashboard component will execute
    //   ) : (
    //     <Login setLoginPass={setAdminPass} /> // if false Login-page component will come in. passed in props from login component is setLoginPass(set to execute code[setAdminPass] that checks the admin auth)
    //   )}
    // </div>
  );
}

export default App;
