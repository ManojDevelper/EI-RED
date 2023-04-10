import React from "react";
import './App.css';
import { BrowserRouter } from "react-router-dom";
import RouterComponent from "./Router";
function App() {
  return (
    <>
      <BrowserRouter>
        <RouterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
