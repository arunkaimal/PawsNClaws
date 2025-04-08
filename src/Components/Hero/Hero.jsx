import React from "react";
import cat1 from "../../assets/cat1.jpg";

const Hero = () => {
  return (
    <>
      <div className=" mt-2">
        <div className="banner w-100" style={{ height: "80vh" }}>
          <img src={cat1} alt="dogs" className="w-100 h-100 rounded-5" />
          <button className="btn btn-danger float-end position-relative bottom-100 me-5 mt-5">Shop Now</button>
        </div>
      </div>
    </>
  );
};

export default Hero;
