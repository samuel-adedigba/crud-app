import { useState } from "react";
import Swal from "sweetalert2";

const Login = ({ setLoginPass }) => {
  const myEmail = "samueladedigba@gmail.com";
  const myPassword = "blaze";

  const [email, setEmail] = useState(myEmail);
  const [password, setPasword] = useState(myPassword);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === myEmail && password === myPassword) {
      Swal.fire({
        timer: 1700,
        showConfirmButton: false,
        title: "Loading...",
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("adminpass", true);
          setLoginPass(true);
          Swal.fire({
            title: "Login Successful",
            icon: "success",
            timer: 3000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
        },
      });
    } else {
      Swal.fire({
        title: "Loading...",
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem("adminpass", false);
          setLoginPass(false);
          Swal.fire({
            icon: "error",
            text: "Incorrect Username / Password",
            showConfirmButton: true,
            confirmButtonText: "Please Try Again",
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      <form onSubmit={handleLogin}>
        <h1>Admin Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="admin@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="admin-password"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
        />
        <input style={{ marginTop: "12px" }} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
