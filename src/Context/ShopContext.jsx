import React, { createContext } from "react";
import product from "../../db.json";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { product };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
