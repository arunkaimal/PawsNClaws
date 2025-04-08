import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer/Footer";
import { ShopContext } from "../Context/ShopContext";

const ShopCategory = (props) => {
  const { product } = useContext(ShopContext); 
  return (
    <>
      <div className="container">
        <Navbar />

        <Footer />
      </div>
    </>
  );
};

export default ShopCategory;
