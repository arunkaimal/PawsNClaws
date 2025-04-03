import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [c_pass, setC_Password] = useState("");

  const navigate = useNavigate();
  const handleSumbmit = async (e) => {
    e.preventDefault();

    if (!username || !email || !pass || !c_pass) {
      toast.error("All fields are mandatory!");
      return;
    }
    // if (username && email) {
    //   toast.error("User already exists!");
    //   return;
    // }
    if (pass !== c_pass) {
      toast.error("Password and Confirm password must be same");
      return;
    }
    let register = { username, email, pass, c_pass };
    try {
      const response = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(register),
      });
      if (!response.ok) {
        throw new Error("Registration failed! please try again later");
      }
      const result = await response.json();
      toast.success("Registered Successfully");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className="container border border-info p-4 mt-5 shadow-lg rounded ">
        <h1 className="text-center">User Registration</h1>
        <form onSubmit={handleSumbmit}>
          <div className="row mb-4">
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  id="form3Example1"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example1">
                  Username
                </label>
              </div>
            </div>
            <div className="col">
              <div data-mdb-input-init className="form-outline">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="form3Example2"
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example2">
                  Email
                </label>
              </div>
            </div>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              id="form3Example3"
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example3">
              Password
            </label>
          </div>

          <div data-mdb-input-init className="form-outline mb-4">
            <input
              value={c_pass}
              onChange={(e) => setC_Password(e.target.value)}
              type="password"
              id="form3Example4"
              className="form-control"
            />
            <label className="form-label" htmlFor="form3Example4">
              Confirm Password
            </label>
          </div>

          <button
            data-mdb-ripple-init
            className="btn btn-primary btn-block mb-4 w-100 mt-3"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
