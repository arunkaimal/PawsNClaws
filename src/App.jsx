import React from "react";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Index from "./Routes/Index";
import "./App.css"

function App() {
  return (
    <>
      <ToastContainer theme="colored"></ToastContainer>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
      
    </>
  );
}

export default App;
