import React from "react";
import "./Register.css";
import Navbar from "../Components/Navbar";

import Hero from "../Components/Hero/Hero";
import Popular from "../Popular/Popular";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <hr className="m-5" />
        <Popular />
      </div>
    </>
  );
};

export default Home;
