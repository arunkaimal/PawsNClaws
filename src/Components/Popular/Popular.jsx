import React, { useEffect, useState } from "react";
import Item from "../Items/Item";
import "./Popular.css";
const Popular = () => {
  const [product, setDataProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        setDataProduct(data.product);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error loading data", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <h1 className="alert alert-warning text text-center">
        Popular Food Items
      </h1>
      <div className="popular-item row">
        {loading ? (
          <p>Loading.....</p>
        ) : (
          product.map((item, i) => (
            <div className="col-3 mt-2 cursor-pointer pop-food">
              <Item
                key={i}
                id={item.id}
                name={item.name}
                type={item.type}
                image={item.image}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
              />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Popular;
