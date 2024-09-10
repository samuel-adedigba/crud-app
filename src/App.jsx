import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/login";

function App() {
  const [isPass, setAdminPass] = useState(null);
  useEffect(() => {
    setAdminPass(JSON.parse(localStorage.getItem("adminpass"))); //admin authorization for each component is saved on the local storage in the key value 'adminpass'
  }, []);

  return (
    <>
      {!isPass ? (
        <Login setAdminPass={setAdminPass} />
      ) : (
        <Dashboard setAdminPass={setAdminPass} />
      )}
    </>
  );
}

export default App;
