import React from "react";
import "./Register.css";
import Navbar from "../Components/Navbar";

import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
        <hr className="m-5" />
        <Popular />
        <hr className="m-5" />
        <Footer />
      </div>
    </>
  );
};

export default Home;
