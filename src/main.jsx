import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShopContext } from "./Context/ShopContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContext.Provider>
      <App />
    </ShopContext.Provider>
  </StrictMode>
);
