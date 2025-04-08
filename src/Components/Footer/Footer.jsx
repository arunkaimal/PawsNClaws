import React from "react";
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer className="w-100 bg-secondary-subtle p-3 mt-4  rounded mb-3 border border-primary-subtle border-3">
        <section className="d-flex justify-content-around">
          <div className="first-section">
            <h3>Company Name</h3>
            <h5>Paws N Claws</h5>
            <p>
              e provide high quality
              <br /> pet foods that only focused on <br /> "DOGS" and "CATS"
            </p>
          </div>
          <div className="second-section">
            <h3>Products</h3>
            <h5>Dog Foods</h5>
            <h5>Cat Foods</h5>
          </div>
          <div className="third-section">Social links</div>
        </section>
        <hr />
          <div className="copyright text-center">&copy; 2025 Copyright : Pet N Claws </div>
      </footer>
    </>
  );
};

export default Footer;
