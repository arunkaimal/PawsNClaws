import React from "react";

const Item = (props) => {
  console.log("props", props);

  return (
    <>
      <div className="card h-100" style={{ width: "18rem" }}>
        <div className="" style={{height:"70%"}}>
        <img src={props.image} className="card-img-top h-75" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title ">{props.name}</h5>
          <p className="card-text">{props.type}</p>
          <p className="card-text">
            <del>₹{props.oldPrice}</del>
            <strong> ₹{props.newPrice}</strong>
          </p>
          <button className="btn btn-light bg-dark text-white w-100">Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default Item;
