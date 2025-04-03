import React from "react";
import "./Register.css";
import Navbar from "../Components/Navbar";
import cat1 from "../assets/cat1.jpg";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mt-2">
        <div className="banner w-100" style={{ height: "70vh" }}>
          <img src={cat1} alt="dogs" className="w-100 h-100" />
        </div>
      </div>
    </>
  );
};

export default Home;
