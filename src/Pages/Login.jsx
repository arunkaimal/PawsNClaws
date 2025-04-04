import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !pass) {
      toast.error("All field are mandatory!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/user`);

      if (!response.ok) {
        throw new Error("Invalid Email or Password");
      }

      const users = await response.json();
      const user = users.find((user) => user.username === username);

      if (!user) {
        toast.error("user not found");
        return;
      }

      if (user.pass !== pass) {
        toast.error("Enter valid password");
        return;
      }

      toast.success("Login Successfull!");
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <>
      <Navbar/>
      <div className="container border border-info p-4 mt-5 shadow-lg rounded">
        <h1 className="text-center">Login</h1>
        <form onSubmit={handleLogin}>
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  id="form3Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example1">
                  Username
                </label>
              </div>
            </div>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              id="form3Example3"
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example3">
              Password
            </label>
          </div>

          <div>
            Not Registered yet? <Link to="/register">Register</Link>
          </div>

          <button
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4 w-100 mt-3"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
